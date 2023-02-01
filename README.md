# Bandit Widgets

This project provides a JavaScript library for rendering widgets on websites. The widgets can display featured collections and related statistics.


### Script:

To use the Bandit Widgets, include the following script tag in the HTML code of the web page:

```
  <script>
    var d = document,
      t = "script",
      o = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
    o.src = "https://sdk.bandit.network/static/js/index.js",
      o.addEventListener("load", function() {
        renderFeatured();
        renderStats();
        renderMenu();
        renderSubscribe();
      }, !1),
      s.parentNode.insertBefore(o, s);
  </script>
```


### Featured collections:

To render a featured collection, add the following HTML code to the web page, replacing [ACCESS_KEY] with the appropriate value:

```
  <div data-access-key=[ACCESS_KEY] id="bad-featured"></div>
```

Please call the below function in above script to render featured collections:
```
  renderFeatured()
```


### Collection Stats:

To render statistics for a collection, add the following HTML code to the web page, replacing [ACCESS_KEY] with the appropriate value:

```
  <div data-access-key=[ACCESS_KEY] id="bad-stats"></div>
```


Please call the below function in above script to render collection stats:
```
  renderStats()
```


### Menu:

Call the below function in above script to render menu which contains links to HELP, LIST A COLLECTION and FEATURE REQUEST.


```
  renderMenu()
```


### Email Subscription:

To render email subscription widget, add the following HTML code to the web page, replacing [ACCESS_KEY] with the appropriate value:

```
  <div data-access-key=[ACCESS_KEY] id="bad-subscribe"></div>
```


Please call the below function in above script to render menu:
```
  renderSubscribe()
```
