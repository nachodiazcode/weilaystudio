#!/bin/sh 

cd ../var/www/weilaystudio/
git fetch
git pull origin main
sudo service nginx restart

