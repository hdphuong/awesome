import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from lxml import html
import os
import requests
import json
import re

class SecSpiders(CrawlSpider):
    name = "sec"

    start_urls = ["https://security.didici.cc/news", 
                    "https://www.darkreading.com/",
                    "https://www.bleepingcomputer.com/",
                    "https://news.ycombinator.com/",
                    "https://threatpost.com/",
                    "https://krebsonsecurity.com/", 
                    "https://nakedsecurity.sophos.com/", 
                    "https://www.itnews.com.au/"]

    #allowed_links = start_urls.extend([r'*news*', r'*sec*'])
    #allowed= start_urls.extend([r'*news*', r'*sec*'])
    allowed_texts = [r'news', r'security', r'finance', r'more', r'next']
    rules = (Rule(LinkExtractor(allow=(start_urls), deny_domains=(r".gov"), restrict_text=()), callback='parse', follow=True), )

    def parse(self, response):
        page = response.url.split("/")[2]
        filename = "data.json"
        js = {
            "url": response.url,
            "title": response.xpath('//title/text()').get(),
            "text": get_keywords(" ".join(response.xpath('//text()').getall())),
        }

        with open(filename, 'a') as f:
            f.write(json.dumps(js) + '\n')

        next_page = response.css('a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse)
    
    def parse_content(self, response):
        page = response.url.split("/")[2]
        filename = f'content/{page}.txt'
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log(f'saved file {filename}')


def get_keywords(content):
    keywords = [r'security', r'finance', r'cyber', r'cyber attacks', r'data breach']
    result = []
    for keyword in keywords:
        if re.search(keyword, content):
            result.append(keyword)
    return result

def check_and_make_dir(dir_name):
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)
