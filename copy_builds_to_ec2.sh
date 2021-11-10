cd api && tsc &&
scp -i ~/Documents/mern-app.pem  -r build/  ubuntu@library.ignouwala.com:/home/ubuntu/ignou-library/api &&
cd ../client && && npm run build &&
scp -i ~/Documents/mern-app.pem  -r build/  ubuntu@library.ignouwala.com:/home/ubuntu/ignou-library/client &&
echo "Done!" && 
ssh -i  ~/Documents/mern-app.pem ubuntu@library.ignouwala.com
# pm2 restart all # on server