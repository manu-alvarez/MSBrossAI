#!/usr/bin/expect -f

set timeout -1
set VPS_USER "manuel"
set VPS_PASS "Manik.87"
set VPS_HOST "msbrossai.alvarezconsult.com"
set VPS_DIR "/home/manuel/MSBrossAI"
set LOCAL_DIR "/Users/manu/Desktop/MSBrossAI/"

puts "\n🚀 Iniciando despliegue de MSBrossAI al VPS ($VPS_HOST)...\n"

puts "📦 Sincronizando código fuente..."
spawn rsync -avz -e "ssh -o StrictHostKeyChecking=no" --exclude "node_modules" --exclude ".git" --exclude "dist" --exclude ".env" --exclude "__pycache__" $LOCAL_DIR $VPS_USER@$VPS_HOST:$VPS_DIR

expect {
    "password:" {
        send "$VPS_PASS\n"
        exp_continue
    }
    eof
}

puts "\n🔄 Ejecutando Docker Compose en el servidor remoto...\n"
spawn ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_HOST "cd $VPS_DIR && docker-compose down && docker-compose build && docker-compose up -d"

expect {
    "password:" {
        send "$VPS_PASS\n"
        exp_continue
    }
    "sudo" {
        send "$VPS_PASS\n"
        exp_continue
    }
    eof
}

puts "\n✅ Despliegue completado automático!\n"
