---
layout: post
title: "How To Get Crisp Edges with the CSS Blur Filter"
date: 2015-08-14
description: The CSS blur filter default behavior leaves the edges of a photo looking horrible. But you can prevent that with a few simple lines of code.
tagline: The blur filter leaves the edges of a photo looking horrible. Here's how to prevent that.
categories: blog
tags: [Web Development, CSS]
comments: true
---

## The Goal

I wanted to create a hover effect (currently seen on my portfolio page) where the picture blurs when the user hovers over it so the text on top is legible. Simple enough, right? There's even a handy little CSS `blur` filter. All you have to do is pass in an argument for the blur radius.

## The Problem

Here is an image with the class `blur` that gives it the property `filter: blur(4px)`. As you can see, it looks simply horrendous.

<img class="blur" src="/img/notecards-cover.png">

#### HTML
{% highlight html %}
<img class="blur" src="/img/notecards-cover.png">
{% endhighlight %}

#### SASS
{% highlight sass %}
.blur
  -webkit-filter: blur(4px)
  filter: blur(4px)
{% endhighlight %}


This is because towards the edge of the photo, the blur filter pulls in the pixels surrounding the image and includes them in the blur effect. 

## The Solution

In order to get crisp edges, there are a couple steps we need to take. We essentially want to hide the edges of the photo, so we can scale it up a little and put a container around it to hide the overflow of the fuzzy edges. 

<div class="demonstration">
	<div class="blur-wrapper">
		<img class="blur-crisp" src="/img/notecards-cover.png">
	</div>
</div>

#### HTML
{% highlight html %}
<div class="blur-wrapper">
  <img class="blur" src="/img/notecards-cover.png">
</div>
{% endhighlight %}

#### SASS
{% highlight sass %}
.blur-wrapper
  width: 50%        // this is where you style the image width
  overflow: hidden  // clips feathery edges

.blur
  width: 100%  // necessary for photo to scale correctly
  -webkit-transform: scale(1.05) // makes fuzzy edges go to overflow of .blur-wrapper
  transform: scale(1.05)
  -webkit-filter: blur(4px)
  filter: blur(4px)
{% endhighlight %}

<a class="button" href="http://codepen.io/chloeam/pen/OVGZwg?editors=110" target="_blank">Codepen</a>

Viol&agrave;!

<!--
## Adding a Grid

I wanted my photos displayed in a grid with no margins and the blur as a hover effect along with descriptive text. In order to do this, I needed to add to the underlying structure. I still need to use a wrapping div around the image for the blur effect, but I also need another div, `info`, for the text and another, `project-preview`, to contain both `blur-wrapper` and `info`. Each `project-preview` represents one portfolio project, and they are all contained in a div with the class of `portfolio`. -->