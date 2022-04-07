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

    start_urls = ["https://security.didici.cc/news/", 
                    "https://www.darkreading.com/",
                    "https://www.bleepingcomputer.com/",
                    "https://threatpost.com/",
                    "https://krebsonsecurity.com/", 
                    "https://nakedsecurity.sophos.com/", 
                    "https://www.itnews.com.au/",
                    "https://www.abc.net.au/news/"]

    #allowed_links = start_urls.extend([r'*news*', r'*sec*'])
    #allowed= start_urls.extend([r'*news*', r'*sec*'])
    allowed_texts = [r'news', r'security', r'finance', r'more', r'next']
    rules = (Rule(LinkExtractor(allow=(), deny_domains=(r".gov"), restrict_text=()), callback='parse', follow=True), )

    def parse(self, response):
        page = response.url.split("/")[2]
        check_and_make_dir("data")
        filename = f"data/{page}.json"
        js = {
            "url": response.url,
            "title": response.xpath('//title/text()').get(),
            "text": get_keywords(" ".join(response.xpath('//text()').getall())),
        }

        with open(filename, 'a') as f:
            f.write(json.dumps(js) + ',\n')

        next_page = response.css('a::attr(href)').get()
        if next_page is not None and not response.url.startswith(next_page):
            yield response.follow(next_page, callback=self.parse)
    


def get_keywords(content):
    sec_keywords = [r'security', r'cyber', r'cyber attacks', r'data breach', r'data leaks', r'malware', r'virus', r'phish', r'scam', r'tech company', r'crypto']
    fins_keywords = [r'financ', r'bank', r'money']
    keywords = sec_keywords
    keywords.extend(fins_keywords)
    result = []
    for keyword in keywords:
        if re.search(keyword, content, flags=re.IGNORECASE):
            result.append(keyword)
    return result

def check_and_make_dir(dir_name):
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)

def check_and_make_file(file_name):
    if not os.path.exists(file_name):
        f = open(file_name, 'w')
        f.write("[" + "\n")
        f.close()