"""
MSBrossAI — Full FTP deployment script with robust error handling.
Uploads the entire www/ directory to the remote host.
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

def upload_dir(ftp, local_dir, remote_dir, skip_dirs=None):
    """Recursively upload a local directory to remote FTP."""
    skip_dirs = skip_dirs or set()
    remote_dir_abs = "/" + remote_dir.strip("/")
    mkdir_p(ftp, remote_dir_abs)
    
    items = sorted(os.listdir(local_dir))
    for item in items:
        if item in {'.DS_Store', '.git', 'node_modules', '__pycache__'}:
            continue
        if item in skip_dirs:
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
                        time.sleep(2)
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
    local_path = os.environ.get("FTP_LOCAL_DIR", "./www")
    
    print(f"🔌 Connecting to {host}...")
    try:
        ftp = ftplib.FTP(host, timeout=30)
        ftp.login(user, password)
        ftp.set_pasv(True)
        print(f"✅ Connected! PWD: {ftp.pwd()}")
        
        # Upload index.html (landing page) first
        ftp.cwd("/www")
        landing = os.path.join(local_path, "index.html")
        if os.path.isfile(landing):
            with open(landing, 'rb') as f:
                ftp.storbinary('STOR index.html', f)
            print("✅ Landing page uploaded")

        # Upload assets directory
        assets_dir = os.path.join(local_path, "assets")
        if os.path.isdir(assets_dir):
            print("\n📦 Deploying assets...")
            upload_dir(ftp, assets_dir, "/www/assets")
        
        # Upload each app directory
        app_dir = os.path.join(local_path, "app")
        if os.path.isdir(app_dir):
            for app_name in sorted(os.listdir(app_dir)):
                if app_name.startswith('.'):
                    continue
                app_local = os.path.join(app_dir, app_name)
                if os.path.isdir(app_local):
                    print(f"\n📦 Deploying {app_name}...")
                    upload_dir(ftp, app_local, f"/www/app/{app_name}")
                    print(f"✅ {app_name} deployed!")
        
        ftp.quit()
        print("\n🚀 Full FTP deployment completed!")
        
    except Exception as e:
        print(f"❌ FTP Error: {e}")
        sys.exit(1)
