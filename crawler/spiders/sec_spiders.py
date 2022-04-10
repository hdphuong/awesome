import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
import os
import json
import re

SEARCH_WORD = "bank"

class SecSpiders(CrawlSpider):
    name = "sec"

    start_urls = ["https://www.darkreading.com/",
                    "https://www.bleepingcomputer.com/news",
                    "https://threatpost.com/",
                    "https://www.itnews.com.au/",
                    "https://www.theregister.co.uk/security/",
                    "https://www.theguardian.com/technology/security/",
                    "https://nakedsecurity.sophos.com/", 
                    "https://www.zdnet.com/au/"]

    rules = (Rule(LinkExtractor(allow=(start_urls), deny_domains=(r".gov", r"sift.com", r"google", r"add"), restrict_text=()), callback='parse', follow=True), )

    def parse(self, response):
        filename = f"{SEARCH_WORD}.json"
        check_and_make_file(filename)
        js = {
            "url": response.url,
            "title": response.xpath('//title/text()').get(),
            "text": get_keywords(" ".join(response.xpath('//text()').getall())),
        }

        if re.search(SEARCH_WORD, response.text, flags=re.IGNORECASE):
            with open(filename, 'a') as f:
                f.write(json.dumps(js) + ',\n')

        next_page = response.css('a::attr(href)').get()
        if next_page is not None and not response.url.startswith(next_page):
            yield response.follow(next_page, callback=self.parse)
    
def check_and_make_dir(dir_name):
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)

def check_and_make_file(file_name):
    if not os.path.exists(file_name):
        f = open(file_name, 'w')
        f.write("[" + "\n")
        f.close()

def get_keywords(content):
    sec_keywords = [r'security', r'cyber', r'attacks', r'data breach', r'data leaks', r'malware', r'virus', r'phish', r'scam', r'crypto']
    fins_keywords = [r'financ', r'bank', r'money']
    keywords = sec_keywords
    keywords.append(SEARCH_WORD)
    keywords.extend(fins_keywords)
    result = []
    for keyword in keywords:
        if re.search(keyword, content, flags=re.IGNORECASE):
            result.append(keyword)
    return result
