"""
MSBrossAI — Fast upload script for index.html and moko-tools intermediate page.
Usage: FTP_PASSWORD=xxx python3 deploy/ftp-fast-landing-fixes.py
"""
import ftplib
import os
import sys

if __name__ == "__main__":
    password = os.environ.get("FTP_PASSWORD")
    if not password:
        print("❌ Set FTP_PASSWORD env var")
        sys.exit(1)

    host = os.environ.get("FTP_HOST", "msbros.ftp.tb-hosting.com")
    user = os.environ.get("FTP_USER", "msbrossme@msbrossme")
    
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    local_index = os.path.join(base_dir, "www", "index.html")
    local_moko_index = os.path.join(base_dir, "www", "moko-tools", "index.html")
    local_logi_index = os.path.join(base_dir, "www", "logisearch", "index.html")

    print(f"🔌 Connecting to {host}...")
    try:
        ftp = ftplib.FTP(host, timeout=30)
        ftp.login(user, password)
        ftp.set_pasv(True)
        print(f"✅ Connected! PWD: {ftp.pwd()}")

        # 1. Upload index.html to /www/index.html
        ftp.cwd("/www")
        with open(local_index, "rb") as f:
            ftp.storbinary("STOR index.html", f)
        print("✅ /www/index.html uploaded successfully!")

        # 2. Upload moko-tools/index.html to /www/moko-tools/index.html
        try:
            ftp.cwd("/www/moko-tools")
        except ftplib.error_perm:
            ftp.cwd("/www")
            ftp.mkd("moko-tools")
            ftp.cwd("moko-tools")
            
        with open(local_moko_index, "rb") as f:
            ftp.storbinary("STOR index.html", f)
        print("✅ /www/moko-tools/index.html uploaded successfully!")

        # 3. Upload logisearch/index.html to /www/logisearch/index.html
        try:
            ftp.cwd("/www/logisearch")
        except ftplib.error_perm:
            ftp.cwd("/www")
            ftp.mkd("logisearch")
            ftp.cwd("logisearch")
            
        with open(local_logi_index, "rb") as f:
            ftp.storbinary("STOR index.html", f)
        print("✅ /www/logisearch/index.html uploaded successfully!")

        ftp.quit()
        print("🎉 Fast deployment of landing page & Moko/Logisearch index completed!")
    except Exception as e:
        print(f"❌ FTP Error: {e}")
        sys.exit(1)
