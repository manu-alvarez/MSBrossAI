"""
MSBrossAI — Upload portal index, Atenea landing page, and Atenea app index.html to FTP.
Usage: FTP_PASSWORD=xxx python3 deploy/ftp-upload-portal-atenea-app.py
"""
import ftplib
import os
import sys

def upload_file(ftp, local_path, remote_path):
    """Upload a single file to a specific remote path on FTP."""
    remote_dir = os.path.dirname(remote_path)
    try:
        ftp.cwd(remote_dir)
    except ftplib.error_perm:
        # Create directory if it does not exist
        current = "/"
        ftp.cwd("/")
        for folder in remote_dir.strip("/").split("/"):
            if folder:
                current += folder + "/"
                try:
                    ftp.mkd(current)
                except ftplib.error_perm:
                    pass
        ftp.cwd(remote_dir)

    filename = os.path.basename(remote_path)
    with open(local_path, 'rb') as f:
        ftp.storbinary(f'STOR {filename}', f)
    print(f"  ✅ {remote_path}")

if __name__ == "__main__":
    password = os.environ.get("FTP_PASSWORD")
    if not password:
        print("❌ Set FTP_PASSWORD env var")
        sys.exit(1)
    
    host = os.environ.get("FTP_HOST", "msbros.ftp.tb-hosting.com")
    user = os.environ.get("FTP_USER", "msbrossme@msbrossme")
    
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    
    files_to_upload = [
        (os.path.join(base_dir, "www", "index.html"), "/www/index.html"),
        (os.path.join(base_dir, "www", "atenea", "index.html"), "/www/atenea/index.html"),
        (os.path.join(base_dir, "www", "app", "atenea", "index.html"), "/www/app/atenea/index.html")
    ]
    
    print(f"🔌 Connecting to {host}...")
    try:
        ftp = ftplib.FTP(host, timeout=30)
        ftp.login(user, password)
        ftp.set_pasv(True)
        print(f"✅ Connected! PWD: {ftp.pwd()}")
        
        print("\n📦 Sincronizando Portal de Entrada, Landing y App de Atenea...")
        for local_p, remote_p in files_to_upload:
            if os.path.isfile(local_p):
                upload_file(ftp, local_p, remote_p)
            else:
                print(f"❌ File not found: {local_p}")
        
        ftp.quit()
        print("\n🚀 Sincronización FTP completada con éxito!")
        
    except Exception as e:
        print(f"❌ FTP Error: {e}")
        sys.exit(1)
