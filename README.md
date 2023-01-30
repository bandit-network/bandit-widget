# Bandit Widgets

This project provides a JavaScript library for rendering widgets on websites. The widgets can display featured collections and related statistics.


### Script:

To use the Bandit Widgets, include the following script tag in the HTML code of the web page:

```http
  <script>
    var d = document,
      t = "script",
      o = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
    o.src = "https://cdn.jsdelivr.net/gh/bandit-network/bandit-widget@main/static/js/index.js",
      o.addEventListener("load", function() {
        renderFeatured();
        renderStats()
      }, !1),
      s.parentNode.insertBefore(o, s);
  </script>
```


### Featured collections:

To render a featured collection, add the following HTML code to the web page, replacing [ACCESS_KEY] with the appropriate value:

```http
  <div data-access-key=[ACCESS_KEY] id="bad-featured"></div>
```


### Collection Stats:

To render statistics for a collection, add the following HTML code to the web page, replacing [ACCESS_KEY] with the appropriate value:

```http
  <div data-access-key=[ACCESS_KEY] id="bad-stats"></div>
```


