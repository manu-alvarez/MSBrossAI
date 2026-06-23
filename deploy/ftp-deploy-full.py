"""
MSBrossAI — Full FTP deployment script with robust error handling.
Uploads the entire www/ directory to the remote host.
"""
import ftplib
import os
import sys
import time

FTP_CLIENT = None

def connect_ftp():
    global FTP_CLIENT
    host = os.environ.get("FTP_HOST", "msbros.ftp.tb-hosting.com")
    user = os.environ.get("FTP_USER", "msbrossme@msbrossme")
    password = os.environ.get("FTP_PASSWORD")
    if not password:
        print("❌ Set FTP_PASSWORD env var")
        sys.exit(1)
    
    if FTP_CLIENT:
        try:
            FTP_CLIENT.quit()
        except:
            pass

    print(f"🔌 (Re)connecting to {host}...")
    ftp = ftplib.FTP(host, timeout=30)
    ftp.login(user, password)
    ftp.set_pasv(True)
    FTP_CLIENT = ftp
    return ftp

def mkdir_p(remote_dir):
    """Create remote directory tree, ignoring if already exists."""
    global FTP_CLIENT
    current = "/"
    try:
        FTP_CLIENT.cwd("/")
    except Exception:
        connect_ftp()
        FTP_CLIENT.cwd("/")
        
    for folder in remote_dir.strip("/").split("/"):
        if folder:
            current += folder + "/"
            try:
                FTP_CLIENT.mkd(current)
            except ftplib.error_perm:
                pass
            FTP_CLIENT.cwd(current)

def upload_dir(local_dir, remote_dir, skip_dirs=None):
    """Recursively upload a local directory to remote FTP."""
    global FTP_CLIENT
    skip_dirs = skip_dirs or set()
    remote_dir_abs = "/" + remote_dir.strip("/")
    
    retries_dir = 3
    for _ in range(retries_dir):
        try:
            mkdir_p(remote_dir_abs)
            break
        except Exception:
            connect_ftp()
    
    items = sorted(os.listdir(local_dir))
    for item in items:
        if item in {'.DS_Store', '.git', 'node_modules', '__pycache__'}:
            continue
        if item in skip_dirs:
            continue
            
        local_path = os.path.join(local_dir, item)
        if os.path.isfile(local_path):
            retries = 3
            for attempt in range(retries):
                try:
                    FTP_CLIENT.cwd(remote_dir_abs)
                    with open(local_path, 'rb') as f:
                        FTP_CLIENT.storbinary(f'STOR {item}', f)
                    print(f"  ✅ {remote_dir_abs}/{item}")
                    break
                except Exception as e:
                    if attempt < retries - 1:
                        print(f"  ⚠️ Retry {attempt+1}/{retries}: {item} ({e})")
                        time.sleep(2)
                        connect_ftp()
                    else:
                        print(f"  ❌ FAILED: {item} ({e})")
                        raise e
        elif os.path.isdir(local_path):
            upload_dir(local_path, f"{remote_dir_abs}/{item}")

if __name__ == "__main__":
    local_path = os.environ.get("FTP_LOCAL_DIR", "./www")

    # ── INJECT TUNNEL URL INTO COMPILED JS ──
    print("🔍 Checking for active Cloudflare Tunnel...")
    import subprocess
    tunnel_url = ""
    log_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../LOGS/tunnel.log")
    try:
        if os.path.isfile(log_path):
            with open(log_path, "r") as f:
                import re
                log_content = f.read()
                m = re.search(r'https://[a-z0-9.-]+\.trycloudflare\.com', log_content)
                if m:
                    tunnel_url = m.group(0)
    except Exception as e:
        print(f"⚠️ Warning: Could not read tunnel.log ({e})")
        
    if tunnel_url:
        print(f"✅ Found tunnel: {tunnel_url}")
        print("🛠️  Patching compiled JS files...")
        patch_script = os.path.join(os.path.dirname(os.path.abspath(__file__)), "patch-js.py")
        subprocess.run([sys.executable, patch_script, tunnel_url])
    else:
        print("⚠️ No active tunnel URL found. Deploying static frontend AS IS.")

    try:
        connect_ftp()
        print(f"✅ Connected! PWD: {FTP_CLIENT.pwd()}")
        
        # Upload index.html (landing page) first
        try:
            FTP_CLIENT.cwd("/www")
        except:
            mkdir_p("/www")
            FTP_CLIENT.cwd("/www")
            
        landing = os.path.join(local_path, "index.html")
        if os.path.isfile(landing):
            with open(landing, 'rb') as f:
                FTP_CLIENT.storbinary('STOR index.html', f)
            print("✅ Landing page uploaded to /www")

        # Upload assets directory
        assets_dir = os.path.join(local_path, "assets")
        if os.path.isdir(assets_dir):
            print("\n📦 Deploying assets...")
            upload_dir(assets_dir, "/www/assets")
        
        # Upload each app directory
        app_dir = os.path.join(local_path, "app")
        if os.path.isdir(app_dir):
            for app_name in sorted(os.listdir(app_dir)):
                if app_name.startswith('.'):
                    continue
                app_local = os.path.join(app_dir, app_name)
                if os.path.isdir(app_local):
                    print(f"\n📦 Deploying {app_name}...")
                    upload_dir(app_local, f"/www/app/{app_name}")
                    print(f"✅ {app_name} deployed!")
        
        # Upload all subdirectories under ./www as intermediate pages (except app and assets)
        print("\n📦 Deploying intermediate pages...")
        for item in sorted(os.listdir(local_path)):
            if item.startswith('.') or item in {'app', 'assets', 'logs', 'tmp'}:
                continue
            item_local = os.path.join(local_path, item)
            if os.path.isdir(item_local):
                print(f"  📦 Deploying intermediate page: {item}...")
                upload_dir(item_local, f"/www/{item}")
                print(f"  ✅ Intermediate page for {item} deployed!")
        
        FTP_CLIENT.quit()
        print("\n🚀 Full FTP deployment completed!")
        
    except Exception as e:
        print(f"❌ FTP Error: {e}")
        sys.exit(1)
