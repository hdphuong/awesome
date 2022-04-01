import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from lxml import html
import os

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
    rules = (Rule(LinkExtractor(allow=(), deny_domains=(r".gov"), restrict_text=(allowed_texts)), callback='parse', follow=True), )

    def parse(self, response):
        page = response.url.split("/")[2]
        check_and_make_dir("raw_data")
        check_and_make_dir("content")
        filename = f'raw_data/{page}.html'
        content = f'content/{page}.txt'
        titles = response.css('.title > a::text').extract()
        links = response.css('.title > a::attr(href)').extract()

        titles.extend(response.css('div > a::text').extract())
        links.extend(response.css('div > a::attr(href)').extract())

        titles.extend(response.css('li > a::text').extract())
        links.extend(response.css('li > a::attr(href)').extract())

        if len(titles) > 0:
            f = open(filename, 'a')
            for title, link in zip(titles, links):
                f.write(f'{title} === {link}\n')
            f.close()
        #with open(filename, 'wb') as f:
        #    f.write(response.body)

        self.log(f'saved file {filename}')

        next_page = response.css('a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse)
    
    def parse_content(self, response):
        page = response.url.split("/")[2]
        filename = f'content/{page}.txt'
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log(f'saved file {filename}')



def check_and_make_dir(dir_name):
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)
