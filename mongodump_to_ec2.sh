mongodump --archive="mongodump-ignou-library" --db="ignou-library" &&
scp -i ~/Documents/mern-app.pem mongodump-ignou-library  ubuntu@library.ignouwala.com:/home/ubuntu/mongodump-ignou-library
# mongorestore --archive="mongodump-ignou-library" # on server