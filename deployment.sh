#!/bin/sh 

cd ../var/www/weilaystudio
git fetch
git pull origin maint
git push
sudo service nginx restart

