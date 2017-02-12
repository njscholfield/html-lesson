# HTML Lesson

There are three languages that are used to make a webpage: *HTML, CSS, and JavaScript*.

## HTML
HTML defines the structure of a webpage.

It has a file extension of `.html`

Everything in HTML is nested inside things called tags. The look like this: `<html> </html>`. There are almost always two: one to start, and one to end. You can nest text, and even other tags, between the beginning and ending tags. To increase readability, when you nest something inside tags, you usually indent the nested tag.

### Basic Anatomy of a Webpage
This is the basic structure of a webpage.
```html
  <!DOCTYPE html>
  <html>
    <head>
      <!-- info about the page for the browser goes here -->
    </head>
    <body>
      <!-- main page content goes here -->
    </body>
  </html>
```

### Commonly Used Tags
- `<h1> - <h6>` Headings
  - h1 is largest, h6 is smallest
- `<p>` Paragraph (normal text)
- `<div>` Basically makes a box
  - can be used to make a visible box, or organize elements on a page
- `<a>` A link to another page
- `<img>` Add an image to your page
- `<button>` A button
  - often used with JavaScript
- `<ul>, <ol>` Lists
  - `ul` - unordered (bulleted) list (like this list)
  - `ol` - ordered (numbered) list
  - `li` - list item

  *Example:*
  ``` html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```
- `<title>` Set the title of the page shown in the browser
- `<link>` Used to link CSS files to your page
- `<script>` Used to include JavaScript in your page
- `<input>` Used to get input from the user
  - includes text boxes, checkboxes, etc.

### Attributes
Attributes are things that are added to opening HTML tags. They look like this: `attribute="value"`. Attributes are not required for all tags, but change the way tags behave.

#### Common Attributes
- `class` - gives a category to a tag
  - used for CSS (more on this later)
- `id` - basically the same as giving a tag a name
  - used for CSS (more on this later)
- `href` - used to specify a URL to link to
  - used on `<a>`, `<link>`
- `src` - used to specify a URL to use as a source
  - used on `<img>`, `<script>`

*Example:*
``` html
<a class="btn btn-primary" href="https://google.com">Google</a>
```
This creates a link to Google that is styled using the CSS classes `btn` and `btn-primary`.

## CSS

CSS is what you use to change how your HTML looks.

It has a file extension of `.css`

To change the look of an item in your page, you have to select it using a *selector* (basically call it by it's name). Then you tell the browser how you want the selected element to look by giving it a list of properties (ways to change the look).

First you write the selector (see below), and wrap all the properties in curly braces (`{}`). For each property, you start with its name, followed by a colon (`:`) and then the value you want it to be. Each property should be followed by a `;` (semi-colon). Only put one property per line.

```css
selector {
  style: value;
}
```

### Types of Selectors
##### tag name
- you just use the name of the tag like: `h1`, `p`, or `div`
  - you can even use `<html>` to apply a style to the whole page - good for setting the font-family
- this will style all of that type of element on the page
- least specific selection

*Example:*
###### HTML
```html
<h1>I am a green heading in the Lato font</h1>
```
```css
h1 {
  color: green;
  font-family: Lato, sans-serif;
}
```

##### class
- this is a name you create and add to the elements you would like to style
- usually used to create a 'type' of object to reuse the same style on multiple elements
- best to give it a descriptive name
- prefix the class name with a `.` (a period) in CSS

*Example:*
###### HTML
```html
<div class="orange">I am orange</div>
```

###### CSS
```css
.orange {
  background-color: orange;
}
```

##### id
- this is a name you give to a specific element on the page
- it should only be given to one element - otherwise you probably want a class instead
- prefix the id with a `#` (a hashtag) in CSS

*Example:*
###### HTML
```html
<div id="box1">I am box 1</div>
```
###### CSS
```css
#box1 {
  height: 5em;
}
```

### Common Properties
- `width` and `height`
  - sets the size of an element
- `font-family`
  - sets the type of font (Helvetica, Times New Roman, etc.)
- `font-size`
  - sets the size of the font-family
- `color`
  - sets the color of the text
- `background-color`
  - sets the color of the background
- `margin`
  - the space around an element
- `padding`
  - the space around the content of an element

#### Size values
- `%` percent
  - based on the size of the parent (what the element is inside)
  - Example: `width: 50%;`
- `em`
  - based upon the default size of the font (usually 16px)
    - 1em = 16px (usually)
    - Example: `margin: 1em;`
- `px` pixels
  - based upon the number of pixels on your screen
  - different screen resolutions can cause problems
  - usually better to use `em` or '%' instead
  - Example: `padding: 10px;`
- `vh` vertical height
  - similar to `%` but is based on the vertical height of the page in the browser, not the size of the parent element
  - fairly new so not very common - but useful
  - Example: `height: 100vh`

## JavaScript

JavaScript makes your webpage interactive.

It has a file extension of `.js`
