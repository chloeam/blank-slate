---
layout: post
title: "Using Jekyll: A Design Student Dives Into Front-End Development"
date: 2015-08-10
description: Why would a graphic designer want to build her own site using Jekyll instead of using a Wordpress or Squarespace theme out of the box? The learning opportunity.
tagline: The How and The Why of using Jekyll to build my portfolio and blog site
categories: blog
tags: [Jekyll, Web Development]
comments: true
---

The site you are looking at now is the product of months of work. Although it woudn't normally take that long to make such a simple site, I was learning how to do so much for the first time, and I made a lot of missteps along the way. The biggest was overcomplicating the end goal: I first tried to build this site using Ruby on Rails. Now yes, that is insane, but I didn't really know what RoR was or what it should be used for. I just knew that everyone said that I should learn it, and that the best way to learn was through doing an actual project. The project I cared most about was my own website. It wasn't until I realized that maybe I was making this more complicated than it needed to be that I looked into other solutions. 

## Why Even Build My Own Site?

Currently, I have an interest in front-end development, but no major plans to seriously explore it. I'm a designer. So why not just use Squarespace, Behance, Wordpress, or one of the dozens of other options available to designers?

* I wanted my site to be a blog as well. I love writing, and I want to be able to house my writing along with my design work rather than on a separate site. This rules out Behance and Squarespace (you could do it but it wouldn't be fun!)

* I wanted extreme control. I've used Squarespace before and have not been happy settling for a design that I "can live with" rather than my first choice.

* I wanted to learn a new skill. This leaves me with Wordpress (I could learn PHP and develop my own theme) or building my own website from scratch.

## Why Jekyll?

Jekyll is a static site generator, and if I'm not mistaken, it is the most popular one currently out. Basically, it allows me to write a post in [Markdown](http://daringfireball.net/projects/markdown/), use YAML front matter to assign the post to a layout (in my case, either 'post' or 'case study'), and Jekyll does the rest. It takes the text you've written and puts it with the layout you've specified and generates an HTML file. It's called a static site generator because this all happens without a server and without a database. 

### Pros

* It's fast. Because there's no database, Jekyll-generated pages load insanely quickly.

* It's secure. Not that I'm concerned about this, but you can't hack something without a database.

* It's lean. CMS's like Wordpress often come with a bunch of features you don't need. With Jekyll, *you* decide what you want and what you don't. There's no extra junk.

* It works straight out of the "box". Jekyll comes ready to use. There are defaults that most people end up tossing, but you don't have to.

### Cons

* There's a bit of a learning curve. You have to use the command line, and if you want anything more than the basic functionality I described, you'll probably need to understand a little bit of [Liquid templating](http://liquidmarkup.org/). To be fair though, you can pretty much find the answer to anything related to Jekyll or Liquid online.

* It's limited to static sites. As in, it can't support changing data or users. But if you know that's what you want, then you're fine.

## Site Structure

The core of Jekyll lies mostly in the `_includes`, `_layouts`, `_posts`, `_site`, and `css` folders. I also have a `_sass` folder where all my stylesheets are. But let's ignore styling for now.

`_includes` houses html code that goes in multiple places on the site, like the code for the header, footer, and various modules. When you want to include that code in another html file, you simply call it like this: {% raw %}`{% include file.html %}`{% endraw %} where file.html contains the code you want to include.

`_posts` is where you write the bulk of your content. To make a new post, you simply create a new Markdown or HTML file called `YYYY-MM-DD-your-title` with the current date and title. At the top of the file, you need to define a couple variables, called YAML front matter. Here is the front matter for this post: 

{% highlight html %}
---
layout: post
title: "Using Jekyll: A Design Student Dives Into Front-End Development"
date: 2015-08-10
tagline: The How and The Why of using Jekyll to build my portfolio and blog site
categories: blog
tags: Jekyll, Web Development
---
{% endhighlight %}

`layout`, `title`, `date`, `categories`, and `tags` are all Jekyll-made variables, but `tagline` is my own (it's the text you see on my Blog page). You can have pretty much anything be a YAML front matter variable, even an image. There are tons of ways to get clever with front matter and be incredibly efficient.

<div class="notice-tip">
	<h4>You Must Use Front Matter</h4>
	<p>If you don't use front matter in your Markdown file, Jekyll won't compile it properly. But if you have no variables to declare, you can leave an empty space between the two dashed lines.</p>
</div>

`_layouts` is where the templating happens. These html files use Liquid and the front matter you set in the posts to plug that information into their format. For example, this is the post layout:

{% highlight html linenos %}
---
layout: default
---
<div class="post">

  <h1 class="post-title">{% raw %}{{ page.title }}{% endraw %}</h1>
  
  <div class="post-meta">
    <p class="post-date">{% raw %}{{ page.date | date: "%b %-d, %Y" }}{% endraw %}</p>
    {% raw %}{% if page.tags %}{% endraw %}
      <p class="post-tags">{% raw %}{{ page.tags | join: ' ' }}{% endraw %}</p>
    {% raw %}{% endif %}{% endraw %}
  </div>

  <article class="post-content">
    {% raw %}{{ content }}{% endraw %}
  </article>

</div>
{% endhighlight %}

Everything you see in curly braces represents the variables defined in each post: `page.title` is the title of the post, `page.date` is the date, etc., and {% raw %}`{{ content }}`{% endraw %} is the body of the file.

So the files in `_posts` house the majority of your content, and it's formatted into an HTML file to be rendered on the site with the help of the files in `_layouts` and `_includes`. Once the HTML file has been rendered, it goes into `_site`, which is where the browser retrieves it.

## Pages

There are three main pages of my site: Portfolio, Blog, and About. Portfolio and Blog both display posts—the only difference is that Portfolio displays posts with a category of `portfolio`and Blog displays posts with a category of `blog`. To target posts of a specific category, you can use this code: {% raw %}`{% for post in site.categories.blog %}`{% endraw %} or {% raw %}`{% for post in site.categories.portfolio %}`{% endraw %}. This works with tags as well.

## SASS and CSS Structure

This is the first project I've done using SASS and a modular file system for stylesheets, and I love it. I have one SASS file for every component (like buttons, footer, header) and every page type (like post, case study, blog) in addition to `_base.sass` and `_variables.sass` which I use to set global styles and variables respectively. 

<a class="button-success" href="{{ site.repo }}" target="_blank">View site on Github</a>


