import ftplib
import os
import sys

def rmtree_ftp(ftp, path):
    """Recursively delete a remote directory. Silently skips if it doesn't exist."""
    try:
        ftp.cwd(path)
    except ftplib.error_perm:
        return  # Directory doesn't exist, nothing to do
    
    try:
        names = ftp.nlst(path)
    except ftplib.error_perm:
        return

    for name in names:
        basename = name.split("/")[-1]
        if basename in (".", ".."):
            continue
        try:
            # Try to cwd into it — if that works, it's a directory
            ftp.cwd(name)
            ftp.cwd("..")
            rmtree_ftp(ftp, name)
        except ftplib.error_perm:
            # It's a file, delete it
            try:
                print(f"  [DEL] {name}")
                ftp.delete(name)
            except ftplib.error_perm:
                pass
    try:
        ftp.cwd("/")
        ftp.rmd(path)
        print(f"  [RMDIR] {path}")
    except ftplib.error_perm:
        pass

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
    
    print(f"Conectando a {host} con usuario {user}...")
    try:
        ftp = ftplib.FTP(host)
        ftp.login(user, password)
        print("Conectado! Identificando dir inicial...")
        print(ftp.pwd())
        
        # === FASE 1: LIMPIAR las carpetas /www/app/* remotas para eliminar bundles viejos ===
        print("\n🧹 FASE 1: Limpiando directorios remotos /www/app/* antiguos...")
        app_dirs = [
            "iaputa", "nikolina", "traductor", "dohler", "combipro",
            "edelweiss", "moko", "taskflow", "logisearch", "app-generator"
        ]
        for app_name in app_dirs:
            remote_app_path = f"/www/app/{app_name}"
            print(f"  Eliminando {remote_app_path}...")
            rmtree_ftp(ftp, remote_app_path)
        print("✅ Limpieza completada.\n")
        
        # === FASE 2: Subir todo el contenido de www local a /www/ remoto ===
        ftp.cwd("/")  # Reset to root after cleanup
        print("📤 FASE 2: Subiendo contenido fresco a /www/...")
        for item in os.listdir(local_path):
            if item in ['.DS_Store', '.git']:
                continue
                
            local_item = os.path.join(local_path, item)
            if os.path.isfile(local_item):
                ftp.cwd("/www")
                print(f"Subiendo {item} a /www/...")
                with open(local_item, 'rb') as f:
                    ftp.storbinary(f'STOR {item}', f)
            elif os.path.isdir(local_item):
                upload_dir(ftp, local_item, f"/www/{item}")
        
        ftp.quit()
        print("\n🚀 Subida por FTP completada con éxito!")
        
    except Exception as e:
        print(f"Error FTP: {e}")
        sys.exit(1)
