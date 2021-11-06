#!bin/sh

# loophole
https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/STRIDE/

# info point
https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/

# download all pdf files of a http directory recursively
wget -r -np -nH --cut-dirs=3  -A pdf,PDF https://webservices.ignou.ac.in/Pre-Question/Question%20Paper%20December%202020/

# move them to appropriate folder
mv temp/*.{pdf,PDF} dec-2020/

# reaname all *.PDF files to *.pdf
rename 's/PDF/pdf/g' *.PDF

# test before actuall changing it
rename -n 's/PDF/pdf/g' *.PDF
