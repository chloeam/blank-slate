---
layout: default
title: Sitemap
date: 2015-08-17
description: "A visual sitemap of all the pages on chloeam.com"
permalink: /sitemap/
---

<h1 class="sitemap-heading">Sitemap</h1>
<p class="tagline">View the <a href="/sitemap.xml">XML version</a> (for robots!)</p>

<div class="sitemap col3">
  <ul id="primaryNav">
    <li id="home"><a href="/">Home</a></li>
    <li><a href="/">Portfolio</a>
      <ul>
        {% for post in site.categories.portfolio %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </li>
    <li><a href="/blog/">Blog</a>
      <ul>
        {% for post in site.categories.blog %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </li>
    <li><a href="/about/">About</a>
      <ul>
        <li><a href="/pattern-library/">Pattern Library</a></li>
      </ul>
    </li>
  </ul>
</div>

<!--<div class="sitemap">
  <ul id="primaryNav">
    <li id="home"><a href="{{ site.url }}/">Home</a></li>
    <li><a href="{{ site.url }}/">Portfolio</a></li>
      <ul class="secondary-nav">
        {% for post in site.categories.portfolio %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    <li><a href="{{ site.url }}/blog/">Blog</a></li>
      <ul class="secondary-nav">
        {% for post in site.categories.blog %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    <li><a href="{{ site.url }}/about/">About</a></li>
    <li><a href="{{ site.url }}/pattern-library/">Pattern Library</a></li>  
  </ul>
</div>-->