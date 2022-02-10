cd api && tsc &&
scp -i ~/Documents/mern-app.pem  -r build/  ubuntu@library.ignouwala.com:/home/ubuntu/ignou-library/api &&
# scp -i ../aws-jhimlish-for-dogehouse.pem  -r build/  ubuntu@52.66.166.69:/home/ubuntu/ignou-library/api &&
cd ../client && && npm run build &&
scp -i ~/Documents/mern-app.pem  -r build/  ubuntu@library.ignouwala.com:/home/ubuntu/ignou-library/client &&
# scp -i ../aws-jhimlish-for-dogehouse.pem  -r build/  ubuntu@52.66.166.69:/home/ubuntu/ignou-library/client &&
echo "Done!" && 
ssh -i  ~/Documents/mern-app.pem ubuntu@library.ignouwala.com
# ssh -i ../aws-jhimlish-for-dogehouse.pem ubuntu@52.66.166.69
# pm2 restart all # on server