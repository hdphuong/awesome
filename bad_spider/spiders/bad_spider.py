import scrapy 
import re 

class BadSpider(scrapy.Spider):
    name = "bad"

    start_urls = ["https://mae-something-awesome.netlify.app"]

    
    def parse(self, response):
        print("===============")
        print(response.url)
        print(response.text)
        if re.search(r"Flag", response.text, re.IGNORECASE):
            print("Found the flag!")
            yield {"url": response.url}
        next_page = response.css('a::attr(href)').get()
        if next_page is not None and not response.url.startswith(next_page):
            yield response.follow(next_page, callback=self.parse)
    
    