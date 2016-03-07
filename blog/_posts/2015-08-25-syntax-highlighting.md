---
title: "Changing Jekyll's Default Syntax Highlighting"
description: How I customized Jekyll's default syntax highlighting to be exactly as I wanted and tested it on several different programming languages
tagline: Making things pretty
tags: [Jekyll, Web Development, How-To]
current: blog
comments: true
---
<div class="notice-info">
  <h4>Jekyll 3 Update</h4>
  <p>With the release of Jekyll 3, Jekyll's default syntax highlighter has changed from Pygments to Rouge. However, the basic principles outlined below are still similar.</p>
</div>

Because I like everything to be nice and pretty, I wanted to change Jekyll's default syntax highlighting theme to something a little more attractive. Jekyll uses Pygments for its syntax highlighting, and here is what the default theme looks like while highlighting a block of HTML:

![HTML code highlighted by Jekyll](/img/old-syntax-highlighting.png)

## Making Line Numbers More Subtle

One huge thing I can do at the beginning is make the line numbers less in your face. I like that they're there, because line numbers are often helpful when referencing specific elements, but I don't want them to compete with the code because you only really want to see them when you actually need them. We can make them a little more subtle by adding the following to our `_syntax-highlighting.scss` file (which comes in every Jekyll project):

{% highlight scss linenos %}
.lineno { color: $highlight-linenumbers; margin-right: 5px }
{% endhighlight %}

<div class="notice-tip">
    <h4>Declaring Color Variables</h4>
    <p>I like to declare every color I use as a variable in a separate sass file because they're easier to update later. I'll define $highlight-linenumbers as #ccc in the next section.</p>
</div>

## Changing the Colors

Now comes the fun part: customizing the colors! Because I wanted to make this as easy to change as possible, I created new variables for each color in my variables sass file. Here are the values I ended up with:

{% highlight sass linenos %}
$highlight-background: #f8f8f8
$highlight-foreground: #655f6d
$highlight-comment: #8b8792
$highlight-red: #be4678
$highlight-orange: #f5871f
$highlight-yellow: #eab700
$highlight-green: #2a9292
$highlight-aqua: #398bc6
$highlight-blue: #576ddb
$highlight-purple: #955ae7
$highlight-linenumbers: #ccc
{% endhighlight %}

Syntax highlighting works by applying a span with a specific class around various elements of your code. So in order to change what color the HTML tags look, for example, all you have to do is go into `_syntax-highlighting.scss` and change the color of class `.nt` (standing for Name.Tag). To find out which class applies to which piece of code, you can look at the source code for a page with highlighted code on it or you can look at the comments of `_syntax-highlighting.scss`, which are sometimes enough to clue you in. I kind of went back and forth between the two. Eventually, I ended up with this in `_syntax-highlighting.scss`:

{% highlight scss linenos %}
.highlight {
  background: #fff;
  .lineno { color: $highlight-linenumbers; margin-right: 5px }

  .c     { color: $highlight-comment; font-style: italic } // Comment
  .err   { color: $highlight-red } // Error
  .k     { color: $highlight-purple } // Keyword
  .o     { color: $highlight-foreground } // Operator
  .p     { color: $highlight-foreground }
  .cm    { color: $highlight-comment; font-style: italic } // Comment.Multiline
  .cp    { color: $highlight-comment } // Comment.Preproc
  .c1    { color: $highlight-comment; font-style: italic } // Comment.Single
  .cs    { color: $highlight-comment; font-style: italic } // Comment.Special
  .gd    { color: $highlight-red } // Generic.Deleted
  .gd .x { color: $highlight-red } // Generic.Deleted.Specific
  .ge    { font-style: italic } // Generic.Emph
  .gr    { color: $highlight-red } // Generic.Error
  .gh    { color: $highlight-foreground } // Generic.Heading
  .gi    { color: $highlight-green } // Generic.Inserted
  .gi .x { color: $highlight-green } // Generic.Inserted.Specific
  .go    { color: $highlight-foreground } // Generic.Output
  .gp    { color: $highlight-comment } // Generic.Prompt
  .gs    { color: $highlight-foreground } // Generic.Strong
  .gu    { color: $highlight-aqua } // Generic.Subheading
  .gt    { color: $highlight-red } // Generic.Traceback
  .kc    { color: $highlight-purple } // Keyword.Constant
  .kd    { color: $highlight-purple } // Keyword.Declaration
  .kp    { color: $highlight-purple } // Keyword.Pseudo
  .kr    { color: $highlight-purple } // Keyword.Reserved
  .kt    { color: $highlight-yellow } // Keyword.Type
  .m     { color: $highlight-orange } // Literal.Number
  .s     { color: $highlight-green } // Literal.String
  .na    { color: $highlight-red } // Name.Attribute
  .nb    { color: $highlight-red } // Name.Builtin
  .nc    { color: $highlight-yellow } // Name.Class
  .nd    { color: $highlight-aqua } // Name.Decorator
  .no    { color: $highlight-red } // Name.Constant
  .ni    { color: $highlight-foreground } // Name.Entity
  .ne    { color: $highlight-red } // Name.Exception
  .nf    { color: $highlight-blue } // Name.Function
  .nn    { color: $highlight-yellow } // Name.Namespace
  .nt    { color: $highlight-aqua } // Name.Tag
  .nl    { color: $highlight-aqua } // Name.
  .nv    { color: $highlight-green } // Name.Variable
  .nx    { color: $highlight-red } // Name.Other
  .ow    { color: $highlight-aqua } // Operator.Word
  .w     { color: $highlight-foreground } // Text.Whitespace
  .mf    { color: $highlight-orange } // Literal.Number.Float
  .mh    { color: $highlight-orange } // Literal.Number.Hex
  .mi    { color: $highlight-orange } // Literal.Number.Integer
  .mo    { color: $highlight-orange } // Literal.Number.Oct
  .sb    { color: $highlight-green } // Literal.String.Backtick
  .sc    { color: $highlight-foreground } // Literal.String.Char
  .sd    { color: $highlight-comment } // Literal.String.Doc
  .s2    { color: $highlight-green } // Literal.String.Double
  .se    { color: $highlight-orange } // Literal.String.Escape
  .sh    { color: $highlight-green } // Literal.String.Heredoc
  .si    { color: $highlight-orange } // Literal.String.Interpol
  .sx    { color: $highlight-green } // Literal.String.Other
  .sr    { color: $highlight-green } // Literal.String.Regex
  .s1    { color: $highlight-green } // Literal.String.Single
  .ss    { color: $highlight-green } // Literal.String.Symbol
  .bp    { color: $highlight-foreground } // Name.Builtin.Pseudo
  .vc    { color: $highlight-red } // Name.Variable.Class
  .vg    { color: $highlight-red } // Name.Variable.Global
  .vi    { color: $highlight-red } // Name.Variable.Instance
  .il    { color: $highlight-orange } // Literal.Number.Integer.Long
}
{% endhighlight %}

## Testing

I wanted to test my new theme on tons of code, even if I didn't usually use or write about those languages. I really only see myself using HTML, Sass, and YAML, but I wanted to make sure other languages looked great too. I got most of the code snippets from the [Octopress syntax highlighting test docs](http://octopress.org/docs/blogging/code/test/).

### HTML

{% highlight html linenos %}
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html><head>
<title>A Tiny Page</title>
<style type="text/css">
<!--
    p { font-size:15pt; color:#000 }
-->
</style></head><!-- real comment -->
<body bgcolor="#FFFFFF" text="#000000" link="#0000CC">
<script language="javascript" type="text/javascript">
function changeHeight(h) {
  var tds = document.getElementsByTagName("td");
  for(var i = 0; i < tds.length; i++) {
    tds[i].setAttribute("height", h + "px");
}}
</script>
<h1>abc</h1>
<h2 class="heading">def</h2>
<p>Testing page</p>
</body></html>
{% endhighlight %}

### SASS

{% highlight sass linenos %}
.menu
  +outer-container(80%)

.accordion-tabs
  $base-border-color: gainsboro !default
  $base-border-radius: 3px !default
  $base-background-color: white !default
  $base-spacing: 1.5em !default
  $action-color: #477DCA !default
  $dark-gray: #333 !default
  $light-gray: #DDD !default
  $medium-screen: em(640) !default
  $tab-border: 1px solid $base-border-color
  $tab-content-background: lighten($light-gray, 10)
  $tab-active-background: $tab-content-background
  $tab-inactive-color: $brown
  $tab-inactive-hover-color: darken($light-gray, 5)
  $tab-mode: $medium-screen

  @include clearfix
  line-height: 1.5
  margin-bottom: $base-spacing
  padding: 0

  @include media(max-width $tab-mode)
    //border-radius: $base-border-radius
    //border: $tab-border

  .tab-header-and-content
    list-style: none

    @include media($tab-mode)
      display: inline

    &:first-child .tab-link
      border-top-left-radius: $base-border-radius
      border-top-right-radius: $base-border-radius

      @include media(max-width $tab-mode)
        border-top: 0

    &:last-child .tab-link
      @include media(max-width $tab-mode)
        border-bottom-left-radius: $base-border-radius
        border-bottom-right-radius: $base-border-radius

  .tab-link
    background-color: $tab-inactive-color
    border-top: $tab-border
    color: $dark-gray
    display: block
    font-weight: bold
    padding: $base-spacing/2 $gutter/2
    text-decoration: none

    @include media($tab-mode)
      @include inline-block
      border-top-left-radius: $base-border-radius
      border-top-right-radius: $base-border-radius
      border-top: 0


    &:hover
      color: $action-color


    &:focus
      outline: none

    &.is-active
      background-color: $tab-active-background

      @include media($tab-mode)
        background-color: $tab-active-background
        border: $tab-border
        border-bottom-color: $tab-active-background
        margin-bottom: -1px
{% endhighlight %}

### YAML

{% highlight yaml linenos %}
---
title: "This is My Title"
category: blog
tags: [Tag1, Tag2, Tag3]
---
{% endhighlight %}

### PHP

{% highlight php linenos %}
<?php
require_once($GLOBALS['g_campsiteDir']. "/$ADMIN_DIR/country/common.php");
require_once($GLOBALS['g_campsiteDir']. "/classes/SimplePager.php");
camp_load_translation_strings("api");

$f_country_language_selected = camp_session_get('f_language_selected', '');
$f_country_offset = camp_session_get('f_country_offset', 0);
if (empty($f_country_language_selected)) {
    $f_country_language_selected = null;
}
$ItemsPerPage = 20;
$languages = Language::GetLanguages(null, null, null, array(), array(), true);
$numCountries = Country::GetNumCountries($f_country_language_selected);

$pager = new SimplePager($numCountries, $ItemsPerPage, "index.php?");

$crumbs = array();
$crumbs[] = array(getGS("Configure"), "");
$crumbs[] = array(getGS("Countries"), "");
echo camp_html_breadcrumbs($crumbs);

?>

<?php  if ($g_user->hasPermission("ManageCountries")) { ?>
<table BORDER="0" CELLSPACING="0" CELLPADDING="1">
    <tr>
        <td><a href="add.php"><?php putGS("Add new"); ?></a></td>
    </tr>
</table>
{% endhighlight %}

### Bash

{% highlight bash linenos %}
#!/bin/bash

cd $ROOT_DIR
DOT_FILES="lastpass weechat ssh Xauthority"
for dotfile in $DOT_FILES; do conform_link "$DATA_DIR/$dotfile" ".$dotfile"; done

# TODO: refactor with suffix variables (or common cron values)
{% endhighlight %}

### Python

{% highlight python linenos %}
# test python (sample from offlineimap)

class ExitNotifyThread(Thread):
    """This class is designed to alert a "monitor" to the fact that a thread has
    exited and to provide for the ability for it to find out why."""
    def run(self):
        global exitthreads, profiledir
        self.threadid = thread.get_ident()
        try:
            if not profiledir:          # normal case
                Thread.run(self)
            else:
                try:
                    import cProfile as profile
                except ImportError:
                    import profile
                prof = profile.Profile()
                try:
                    prof = prof.runctx("Thread.run(self)", globals(), locals())
                except SystemExit:
                    pass
                prof.dump_stats( \
                            profiledir + "/" + str(self.threadid) + "_" + \
                            self.getName() + ".prof")
        except:
            self.setExitCause('EXCEPTION')
            if sys:
                self.setExitException(sys.exc_info()[1])
                tb = traceback.format_exc()
                self.setExitStackTrace(tb)
        else:
            self.setExitCause('NORMAL')
        if not hasattr(self, 'exitmessage'):
            self.setExitMessage(None)

        if exitthreads:
            exitthreads.put(self, True)

    def setExitCause(self, cause):
        self.exitcause = cause
    def getExitCause(self):
        """Returns the cause of the exit, one of:
        'EXCEPTION' -- the thread aborted because of an exception
        'NORMAL' -- normal termination."""
        return self.exitcause
    def setExitException(self, exc):
        self.exitexception = exc
    def getExitException(self):
        """If getExitCause() is 'EXCEPTION', holds the value from
        sys.exc_info()[1] for this exception."""
        return self.exitexception
    def setExitStackTrace(self, st):
        self.exitstacktrace = st
    def getExitStackTrace(self):
        """If getExitCause() is 'EXCEPTION', returns a string representing
        the stack trace for this exception."""
        return self.exitstacktrace
    def setExitMessage(self, msg):
        """Sets the exit message to be fetched by a subsequent call to
        getExitMessage.  This message may be any object or type except
        None."""
        self.exitmessage = msg
    def getExitMessage(self):
        """For any exit cause, returns the message previously set by
        a call to setExitMessage(), or None if there was no such message
        set."""
        return self.exitmessage
{% endhighlight %}
