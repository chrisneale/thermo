#!/bin/bash
i=1
for file in *.jpg
do
        j=$( printf "%05d" "$i" )
		mv "$file" "image$j.jpg"
		(( i++ ))
done
