require 'open-uri'
require 'nokogiri'
require 'rss'

module Jekyll
  class ExcuseOfTheDay < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      begin
        # Fetch the RSS feed
        url = "https://meyerweb.com/feeds/excuse/rss20.xml"
        xml = URI.open(url).read
        feed = RSS::Parser.parse(xml, false)

        # Parse the first item's description (latest excuse)
        latest_excuse = feed.items.first.description

        # Add the excuse to the site data so it can be accessed in templates
        site.config['excuse_of_the_day'] = latest_excuse

      rescue => e
        Jekyll.logger.error "Failed to fetch Excuse of the Day:", e.message
        site.config['excuse_of_the_day'] = "Unable to fetch excuse."
      end
    end
  end
end
