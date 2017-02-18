# Copy Paste

### Link to this GitHub Repo
[https://git.io/vD7Gf](https://git.io/vD7Gf)

### Text Editor

If you want a good text editor to use to make your webpage, I would recommend using [Atom](https://atom.io).

### `<head>` information

```html
<meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
```

### Posting you web page on the Pitt server
[Instructions](http://technology.pitt.edu/support/creating-your-own-web-site)

### Bootstrap
Pick a theme you like from <a href="https://bootswatch.com" target="blank">Bootswatch</a>. Then replace the `{theme}` in the link below with the name of the theme you want (all lowercase).

###### CSS
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/{theme}/bootstrap.min.css">
```

###### JavaScript
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
```

### Weather API
`
https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%2012763654&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
`
