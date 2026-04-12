import ftplib
import os
import sys

def mkdir_p(ftp, remote_dir):
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
    remote_dir_abs = "/" + remote_dir.strip("/")
    mkdir_p(ftp, remote_dir_abs)
    
    for item in os.listdir(local_dir):
        if item in ['.DS_Store', '.git']:
            continue
            
        local_path = os.path.join(local_dir, item)
        if os.path.isfile(local_path):
            ftp.cwd(remote_dir_abs)
            print(f"Subiendo {item} a {remote_dir_abs}...")
            with open(local_path, 'rb') as f:
                ftp.storbinary(f'STOR {item}', f)
        elif os.path.isdir(local_path):
            upload_dir(ftp, local_path, f"{remote_dir_abs}/{item}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        pass_arg = "LaPasswordSiNoCogeManik87"
    else:
        pass_arg = sys.argv[2]
        
    host = "msbros.ftp.tb-hosting.com"
    user = "msbrossme@msbrossme"
    password = pass_arg
    
    local_path = "/Users/manu/Desktop/MSBrossAI/www"
    remote_base = "/" # public_html o directorio inicial de msbrossme
    
    print(f"Conectando a {host} con usuario {user}...")
    try:
        ftp = ftplib.FTP(host)
        ftp.login(user, password)
        print("Conectado! Identificando dir inicial...")
        print(ftp.pwd())
        
        # Subir todo el contenido de www
        for item in os.listdir(local_path):
            if item in ['.DS_Store', '.git']:
                continue
                
            local_item = os.path.join(local_path, item)
            if os.path.isfile(local_item):
                print(f"Subiendo {item}...")
                with open(local_item, 'rb') as f:
                    ftp.storbinary(f'STOR {item}', f)
            elif os.path.isdir(local_item):
                upload_dir(ftp, local_item, item)
        
        ftp.quit()
        print("Subida por FTP completada con éxito!")
        
    except Exception as e:
        print(f"Error FTP: {e}")
        sys.exit(1)
