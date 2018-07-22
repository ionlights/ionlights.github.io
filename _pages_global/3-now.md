---
layout: base
title: now
permalink: /now/
explanatory_blurb: >-
  Note: More detailed information about <a href="/projects/">projects</a>, <a href="/outreach/">outreach</a>, and the like are available on their respective pages. I'll try to update this about once a month, but we'll see how well that works out. :joy:
---

{% assign category = "now" %}
{% assign post = site.categories.now.first %}

<div class="container py-5">
  <div class="log-heading col-12 col-lg-8">
    <h1 class="log-title"> Now (this is a <a href="https://nownownow.com/about">/now</a> page) </h1>
    <div class="btn btn-log-date"> on {{ post.date | date: "%b %d, %Y" }} </div>
  </div>
  {% assign dino = site.time | date: "%Y" | plus: -1 %}
  {% assign psyr = post.date | date: "%Y" | plus:  0 %}
  {% unless dino >= psyr %}
    <div class="log-age-warning">

    </div>
  {% endunless %}
</div>

<div class="container pb-5">
  <div class="row px-3">
    <article class="col-12 col-lg-8" id="log-entry">
      <div class="alert alert-warning"> {{ page.explanatory_blurb }} </div>
      {{ post.content | remove_first: post.excerpt }}
    </article>

    <div class="col-12 col-lg-4">
      {% include modules/logs/related.html %}
    </div>
  </div>
</div>