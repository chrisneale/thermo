#!/bin/sh
OUTPUTFILE=$(date '+%FT%T').jpg
raspistill -w 800 -h 600 -o /home/pi/thermo/public/images/$OUTPUTFILE -v
cp /home/pi/thermo/public/images/$OUTPUTFILE /home/pi/thermo/public/images/webcam.jpg
