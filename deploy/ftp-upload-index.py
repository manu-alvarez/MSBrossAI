"""
MSBrossAI — Upload only the landing index.html to FTP root.
Usage: FTP_PASSWORD=xxx python3 deploy/ftp-upload-index.py
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
    local_file = os.path.join(os.path.dirname(__file__), "..", "www", "index.html")

    print(f"🔌 Connecting to {host}...")
    try:
        ftp = ftplib.FTP(host, timeout=30)
        ftp.login(user, password)
        ftp.set_pasv(True)
        print(f"✅ Connected! PWD: {ftp.pwd()}")

        ftp.cwd("/www")
        with open(local_file, "rb") as f:
            ftp.storbinary("STOR index.html", f)
        print("✅ index.html uploaded to production /www root!")

        ftp.quit()
    except Exception as e:
        print(f"❌ FTP Error: {e}")
        sys.exit(1)
