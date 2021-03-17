#!/bin/sh 

cd ../var/www/weilaystudio
git pull
git push
pm2 restart app.js