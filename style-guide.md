---
layout: style-guide
title: Style Guide
date: 2015-08-06
tagline: A Pattern Library
permalink: /style-guide/
---

This is a style guide: a living document of code detailing all the various colors, typographic elements, UI patterns, and components used on the website to maintain visual consistency.
{: .squish .tagline}


{% assign componentsByType = site.components | group_by:"type" %}
{% for type in componentsByType %}
<h2 id="guide-{{ type.name }}" class="cf">{{ type.name | capitalize }}</h2>
{% for entry in type.items %}
{% include component.html %}
{% endfor %}
{% endfor %}