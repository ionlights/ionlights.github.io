FROM jekyll/jekyll:pages

RUN useradd 1000
RUN groupadd 1000

RUN chown 1000:1000 -R /usr/local

CMD ["jekyll", "s"]