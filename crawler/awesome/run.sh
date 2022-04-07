#!/bin/bash

cd awesome
scrapy crawl sec &
cd ..
python3 hitapi.py