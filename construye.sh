#!/usr/bin/bash
echo "Reconstruyendo acinco-web [produccion]"
echo "Cambiando a Directorio de Contruccion $1"
cd "$1"
echo "Ejecutando 'git pull'"
/usr/bin/git pull
echo "Ejecutando 'npm install'"
/usr/bin/npm install
echo "Eliminando Archivos '.env.*'"
rm -rf .env.*
echo "Ejecutando 'npm run build'"
/usr/bin/npm run build
echo "Reiniciando servidor nginx (reload)"
/usr/sbin/service nginx reload

