---
layout: base
title: now
permalink: /now/
explanatory_blurb: >-
  Note: More detailed information about <a href="/projects/">projects</a>, <a href="/outreach/">outreach</a>, and the like are available on their respective pages. I'll to update this about once a month, but we'll see how well that works out. :joy:
---

{% assign category = "now" %}
{% assign post = site.categories.now.first %}

<div class="container pt-5">
  <div class="jumbotron py-md-5">
    <h1 class="mb-0 log-heading rounded-top"> Now (this a <a href="https://nownownow.com/about/">/now</a> page)</h1>
    <h2 class="mb-0 log-heading rounded-bottom"> or... what's changed in the last while.</h2>
    <hr>
    <div class="btn btn-primary"> {{ post.date | date: "%b %d, %Y" }} </div>
  </div>
</div>

<div class="container pb-5">
  <div class="row">
    <div class="col-12 col-lg-8">
      <div class="alert alert-warning"> {{ page.explanatory_blurb }} </div>
      {{ post.content }}
    </div>
    <div class="col-12 col-lg-4">
      {% include modules/logs/related.html %}
    </div>
  </div>
</div>