---
layout: post
title:  "Style Guide"
date:   2015-08-03
tagline: This is a base template for portfolio case studies to create a uniform look
roles: Design, UX Design, Front-End Development
categories: portfolio
permalink: /portfolio/style-guide

overview: This is the overview. Aenean pellentesque risus quam, eget sollicitudin libero pellentesque vitae. Vestibulum dolor tortor, semper semper cursus quis, elementum sed purus. Donec rhoncus lobortis nulla, consequat vestibulum neque sollicitudin ut. Etiam sagittis magna pulvinar ullamcorper consectetur. Cras quam lectus, scelerisque non quam eget, molestie consectetur felis. Sed ultrices hendrerit lorem id mattis. Cras tincidunt, ipsum eget vestibulum vestibulum, massa nisi tincidunt justo, aliquam euismod nulla erat at enim. Vivamus pellentesque semper ornare. Vestibulum pulvinar vehicula lorem ut dapibus. Morbi pulvinar vitae arcu quis ultricies. Morbi ac dictum risus. Proin et tellus quam.

style: |
  .hero {
    background-image: url(https://static.pexels.com/photos/6619/pexels-photo-large.jpeg)
  }
---

This is an H1 in Markdown
=========================

This is a normal paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit dolor, in ornare tellus. Sed nec posuere metus, et facilisis enim. Donec quis nisi eget nisi interdum laoreet vel eget lectus. Sed nec velit ultrices, pharetra turpis tempor, pulvinar turpis. Suspendisse vel venenatis urna. Quisque eu ante vel nisl sollicitudin mollis. Aenean congue, sem eget malesuada ullamcorper, dolor nulla interdum urna, vel finibus mauris diam eget libero. Phasellus ac elementum mauris. Mauris quis dui suscipit nisi lacinia consequat. Curabitur ultricies nunc feugiat tellus convallis, in pretium arcu commodo. Proin et consequat ligula. Vestibulum eget pellentesque turpis, in iaculis velit.

This is an H2
-------------

Fusce sodales tempor nisi, sed imperdiet diam vulputate in. Quisque semper, odio sed ornare faucibus, ipsum leo tincidunt nulla, a laoreet nisi risus quis arcu. Suspendisse quis blandit mauris. Nullam interdum sit amet velit quis congue. Praesent nisl turpis, commodo in ipsum a, rhoncus bibendum felis. Phasellus tincidunt nibh nec purus malesuada fringilla. Mauris eu nisl a turpis porttitor pulvinar in ac neque. Morbi a pharetra nisl. Mauris tincidunt fringilla varius.

### This Here is an H3!

Suspendisse at eros ut nibh consequat mollis. Nullam cursus dictum lacus sit amet fringilla. Duis sed quam sed ipsum sollicitudin placerat. Cras quis placerat eros. Proin vestibulum ornare posuere. Maecenas congue sagittis felis ac hendrerit. Vestibulum aliquet sagittis purus et congue. Suspendisse ac sapien vel urna mollis porta porttitor et libero. Nulla facilisi. Vivamus a ornare ipsum. Aliquam sit amet molestie enim, eu suscipit odio. Quisque sit amet leo venenatis, lobortis nulla vel, condimentum sem. Suspendisse pretium dui mi, sit amet dictum erat convallis nec.


<img class="large-img" src="https://static.pexels.com/photos/7443/pexels-photo-large.jpg">

<p class="caption">And this is the image's caption.</p>

<h2>This is code</h2>


	def print_hi(name)
    puts "Hi, #{name}"
    end
    print_hi('Tom')
    #=> prints 'Hi, Tom' to STDOUT.

<blockquote class="quote-center">This is a really profound blockquote. Isn't it divine? Doesn't it just make you ponder the meaning of life? Vivamus pellentesque semper ornare. Vestibulum pulvinar vehicula lorem ut dapibus.</blockquote>


Here is a paragraph with some styling and links!
================================================

Aenean pellentesque risus quam, *this text is emphasized* pellentesque vitae. Vestibulum dolor tortor, semper semper cursus quis, elementum sed purus. Donec rhoncus lobortis nulla, consequat vestibulum neque sollicitudin ut. Etiam sagittis magna pulvinar ullamcorper consectetur. [This is an inline link](http://menindrag.org), scelerisque non quam eget, molestie consectetur felis. Sed ultrices hendrerit lorem id mattis. **This text is strongly emphasized**, ipsum eget vestibulum vestibulum, massa nisi tincidunt justo, aliquam euismod nulla erat at enim. Vivamus pellentesque semper ornare. Vestibulum pulvinar vehicula lorem ut dapibus. Morbi pulvinar vitae arcu quis ultricies. Morbi ac dictum risus. Proin et tellus quam.

<img class="medium-img" src="https://static.pexels.com/photos/7289/animal-dog-pet-sad-large.jpg">

<p class="caption">This is an image with the class "medium-img". Isn't he a cute puppy?!</p>

###Here is a numbered list:

1. One
2. Two
3. Three

###Here is a bulleted list:

* Hello!
* I'm a bulleted list.
* I'm pretty useful, much more so than my numbered cousin.

This is when things need to be split in half
============================================

With margin
-----------

<img class="left" src="https://static.pexels.com/photos/6025/food-holiday-vacation-summer-medium.jpg">

<img class="right" src="https://static.pexels.com/photos/6374/flowers-desk-office-vintage-medium.jpg">

The page isn't split exactly in half between them because there's a small margin in the middle.

No margin
---------

<div class="row">
	<div class="left">
	<h3>This is a long heading, which hopefully wraps nicely. Oops, not quite long enough. There we go!</h3>

	Here, there's no margin and the page is split exactly in half. Magic! Well, not really. The picture on the right uses class "half-r" (because it's exactly half with no margin) while this text div uses class "left." Ut vitae ultrices est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat in velit vitae vulputate. Nullam ornare lorem vel tristique dictum. Sed volutpat, tortor in vestibulum tincidunt, orci urna lobortis nibh, sit amet laoreet leo nisl eget neque. Nam tincidunt elit nisl, eget vehicula nulla pretium eget. Nam ac orci at lacus pretium mollis ac id erat. Pellentesque non diam semper, egestas erat vitae, blandit urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consequat justo in tortor tincidunt aliquam.
	</div>

	<img class="half-r" src="https://static.pexels.com/photos/7471/landscape-water-bay-fog-medium.jpg">
</div>


<a class="button" href="#">This is a button link</a>

<blockquote class="quote-left">This is a blockquote with a class of "quote-left." This is a <a href="#">link!</a> Vivamus pellentesque semper ornare. Vestibulum pulvinar vehicula lorem ut dapibus.</blockquote>


Ut vitae ultrices est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat in velit vitae vulputate. Nullam ornare lorem vel tristique dictum. Sed volutpat, tortor in vestibulum tincidunt, orci urna lobortis nibh, sit amet laoreet leo nisl eget neque. Nam tincidunt elit nisl, eget vehicula nulla pretium eget. Nam ac orci at lacus pretium mollis ac id erat. Pellentesque non diam semper, egestas erat vitae, blandit urna. 

Fusce sodales tempor nisi, sed imperdiet diam vulputate in. Quisque semper, odio sed ornare faucibus, ipsum leo tincidunt nulla, a laoreet nisi risus quis arcu. Suspendisse quis blandit mauris. Nullam interdum sit amet velit quis congue. Praesent nisl turpis, commodo in ipsum a, rhoncus bibendum felis. Phasellus tincidunt nibh nec purus malesuada fringilla. Mauris eu nisl a turpis porttitor pulvinar in ac neque. Morbi a pharetra nisl. Mauris tincidunt fringilla varius.

<hr>

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consequat justo in tortor tincidunt aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget sollicitudin orci. Proin iaculis eleifend turpis elementum pulvinar. Duis eu porta odio, ac pretium augue. Aliquam lobortis auctor diam, in bibendum lacus viverra vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.

<blockquote class="quote-right">This is a blockquote with a class of "quote-right." Blah, blah, blah, profound stuff goes here. Vivamus pellentesque semper ornare. Vestibulum pulvinar vehicula lorem ut dapibus.</blockquote>

Ut vitae ultrices est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat in velit vitae vulputate. Nullam ornare lorem vel tristique dictum. Sed volutpat, tortor in vestibulum tincidunt, orci urna lobortis nibh, sit amet laoreet leo nisl eget neque. Nam tincidunt elit nisl, eget vehicula nulla pretium eget. Nam ac orci at lacus pretium mollis ac id erat. Pellentesque non diam semper, egestas erat vitae, blandit urna. 

Fusce sodales tempor nisi, sed imperdiet diam vulputate in. Quisque semper, odio sed ornare faucibus, ipsum leo tincidunt nulla, a laoreet nisi risus quis arcu. Suspendisse quis blandit mauris. Nullam interdum sit amet velit quis congue. Praesent nisl turpis, commodo in ipsum a, rhoncus bibendum felis. Phasellus tincidunt nibh nec purus malesuada fringilla. Mauris eu nisl a turpis porttitor pulvinar in ac neque. Morbi a pharetra nisl. Mauris tincidunt fringilla varius.

Ut vitae ultrices est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat in velit vitae vulputate. Nullam ornare lorem vel tristique dictum. Sed volutpat, tortor in vestibulum tincidunt, orci urna lobortis nibh, sit amet laoreet leo nisl eget neque. Nam tincidunt elit nisl, eget vehicula nulla pretium eget. Nam ac orci at lacus pretium mollis ac id erat. Pellentesque non diam semper, egestas erat vitae, blandit urna. 

Fusce sodales tempor nisi, sed imperdiet diam vulputate in. Quisque semper, odio sed ornare faucibus, ipsum leo tincidunt nulla, a laoreet nisi risus quis arcu. Suspendisse quis blandit mauris. Nullam interdum sit amet velit quis congue. Praesent nisl turpis, commodo in ipsum a, rhoncus bibendum felis. Phasellus tincidunt nibh nec purus malesuada fringilla. Mauris eu nisl a turpis porttitor pulvinar in ac neque. Morbi a pharetra nisl. Mauris tincidunt fringilla varius.