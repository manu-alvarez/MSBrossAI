"""
MSBrossAI — Upload ONLY the Nikolina app to FTP.
Usage: FTP_PASSWORD=xxx python3 deploy/ftp-upload-nikolina.py
"""
import ftplib
import os
import sys
import time

def mkdir_p(ftp, remote_dir):
    """Create remote directory tree, ignoring if already exists."""
    current = "/"
    ftp.cwd("/")
    for folder in remote_dir.strip("/").split("/"):
        if folder:
            current += folder + "/"
            try:
                ftp.mkd(current)
            except ftplib.error_perm:
                pass
            ftp.cwd(current)

def upload_dir(ftp, local_dir, remote_dir):
    """Recursively upload a local directory to remote FTP."""
    remote_dir_abs = "/" + remote_dir.strip("/")
    mkdir_p(ftp, remote_dir_abs)
    
    items = sorted(os.listdir(local_dir))
    for item in items:
        if item in {'.DS_Store', '.git', 'node_modules', '__pycache__'}:
            continue
            
        local_path = os.path.join(local_dir, item)
        if os.path.isfile(local_path):
            ftp.cwd(remote_dir_abs)
            retries = 3
            for attempt in range(retries):
                try:
                    with open(local_path, 'rb') as f:
                        ftp.storbinary(f'STOR {item}', f)
                    print(f"  ✅ {remote_dir_abs}/{item}")
                    break
                except Exception as e:
                    if attempt < retries - 1:
                        print(f"  ⚠️ Retry {attempt+1}/{retries}: {item} ({e})")
                        time.sleep(1)
                    else:
                        print(f"  ❌ FAILED: {item} ({e})")
        elif os.path.isdir(local_path):
            upload_dir(ftp, local_path, f"{remote_dir_abs}/{item}")

if __name__ == "__main__":
    password = os.environ.get("FTP_PASSWORD")
    if not password:
        print("❌ Set FTP_PASSWORD env var")
        sys.exit(1)
    
    host = os.environ.get("FTP_HOST", "msbros.ftp.tb-hosting.com")
    user = os.environ.get("FTP_USER", "msbrossme@msbrossme")
    
    local_dir = os.path.join(os.path.dirname(__file__), "..", "www", "app", "nikolina")
    
    print(f"🔌 Connecting to {host}...")
    try:
        ftp = ftplib.FTP(host, timeout=30)
        ftp.login(user, password)
        ftp.set_pasv(True)
        print(f"✅ Connected! PWD: {ftp.pwd()}")
        
        print("\n📦 Deploying ONLY Nikolina...")
        upload_dir(ftp, local_dir, "/www/app/nikolina")
        
        ftp.quit()
        print("\n🚀 Nikolina FTP deployment completed successfully!")
        
    except Exception as e:
        print(f"❌ FTP Error: {e}")
        sys.exit(1)
