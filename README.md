FeinCMS TinyMCE plugins
=======================

A collection of plugins for TinyMCE which are useful which tie in nicely to
[FeinCMS](http://github.com/feincms/feincms).

Configuration
-------------
To add one of these plugins to your TinyMCE, you will need to change your TinyMCE init script.
We do this by changing the `FEINCMS_RICHTEXT_INIT_TEMPLATE` to a custom path, and extend the
`admin/content/richtext/init_tinymce.html` template, overriding `{% block plugins %}`. You need
to add the name of the plugin (e.g. `medialibrarylink`) to the block (you probably want
`{{ block.super }}` as well).

You then need to ensure that the plugins are loadable. *If* your TinyMCE installation is located
at `js/tiny_mce`, then you can simply add `feincms_tinymce` to `INSTALLED_APPS`. Otherwise, you
will need to copy the plugin files to your own code and include them at the same path as TinyMCE.

medialibrarylink
----------------

An extension of the link button to allow linking to a media item.
