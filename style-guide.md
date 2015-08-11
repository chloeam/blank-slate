---
layout: style-guide
title: Pattern Library
date: 2015-08-06
tagline: A Pattern Library
permalink: /pattern-library/
---

This is the pattern library: a living document of code detailing the various colors, typographic elements, UI patterns, and components used on the website to maintain visual consistency. Currently, the library is best viewed on a desktop or laptop device.
{: .squish}

{% assign entries = site.colors %}
{% assign componentsByType = site.components | group_by:"type" %}

<form>
  <select name="newurl" id="component-select" onChange="window.location.replace(this.options[this.selectedIndex].value)">
    <option value="">Select a Component</option>
    <option value="#guide-color-palettes">Colors</option>
      {% for type in componentsByType %}
      <option value="#guide-{{ type.name }}">{{ type.name | capitalize }}</option>
      {% for entry in type.items %}
      <option value="#guide-{{ entry.title | slugify }}">&nbsp;&nbsp;&nbsp;{{ entry.title }}</option>
      {% endfor %}
      {% endfor %}
  </select>
</form>


<h2 id="guide-color-palettes" class="cf">Colors</h2>
{% for entry in entries %}
  {% include component-color.html %}
{% endfor %}
{% for type in componentsByType %}
<h2 id="guide-{{ type.name }}" class="cf">{{ type.name | capitalize }}</h2>
{% for entry in type.items %}
{% include component.html %}
{% endfor %}
{% endfor %}