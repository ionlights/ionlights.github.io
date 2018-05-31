---
layout: page
title: now
permalink: /about/now/
explanatory_blurb: >-
  This is my <a href="https://nownownow.com/about">/now</a> page. I try to
  update this about once a month, but we'll see how well that works out. :joy:
---

{% assign post = site.categories["now"].first %}
{% assign content = post.content %}

{% include modules/header.html
  name="now"
  blurb=page.explanatory_blurb %}

<div class="row">
  <div class="col-12 col-md-4 mb-5">
    <div class="card">
      <div class="card-header">
        The WABAC Machine
      </div>
      <div class="list-group list-group-flush">
        {% assign ohnows = site.categories["now"] | limit: 10 %}
        {% for now in ohnows %}
          <a href="{{ now.url }}"
             class="list-group-item d-flex justify-content-between align-items-center{% if now.date == post.date %} active{% endif %}">
            As of {{ now.date | date: "%d %B, %Y" }}
          </a>
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="col-12 col-md-8">
    <h1>What I'm doing now </h1>
    <div class="alert alert-warning">Note: More detailed information about <a href="/builds/">projects</a>, <a href="/outreach/">outreach</a>, and the like are available on their respective pages.</div>
    {{ content }}
  </div>
</div>
