mongodump --archive="mongodump_ignou_library" --db="ignou-library" &&
scp -i ~/Documents/mern-app.pem mongodump_ignou_library  ubuntu@library.ignouwala.com:/home/ubuntu/mongodump_ignou_library
# mongorestore --archive="mongodump_ignou_library" # on server