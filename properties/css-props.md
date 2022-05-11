# CSS Properties

## April 27, 2022

This is mainly everything I'm using in multi-viewer.

## Cross Browser Compatibility

```css
.block {
  -webkit-transition: background-color 1000ms linear;
     -moz-transition: background-color 1000ms linear;
      -ms-transition: background-color 1000ms linear;
       -o-transition: background-color 1000ms linear;
          transition: background-color 1000ms linear;
}
```

### In multi-viewer:

```css
moz-appearance
webkit-appearance

ms-grid-column
ms-grid-column-span
ms-grid-row

moz-transition
webkit-transition
ms-transition
o-transition

moz-user-drag
webkit-user-drag
```

## appearance

The `appearance` property defines how elements (particularly form controls) **appear** by default.

```css
.thing {
   -webkit-appearance: value;
      -moz-appearance: value;
           appearance: value;
}
```

**[css-tricks: appearance](https://css-tricks.com/almanac/properties/a/appearance/)**
Awesome resource, has WebKit & Mozilla values, and link to [caniuse](https://caniuse.com/css-appearance).


## `-moz`

The `-moz-appearance` property is used in Gecko (Firefox) to show an element using platform-native styling based on the operating system's theme.

## `-webkit`
The `-webkit-appearance` property is a proprietary CSS extension that is supported by the WebKit browser engine.



<br>
## background

The `background` (without `-color`) property can be used to **set all** the background properties for an element in one declaration.


```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <box> and <background-color> */
background: border-box red;

/* A single image, centered and scaled */
background: no-repeat center/80% url("../img/image.png");
```

[Mozilla: Background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

<br>

## background-color

The `background-color` property is used to specify the **background color** of an element.

```css
/* Keyword values */
background-color: indigo;

/* Hexadecimal value */
background-color: #bbff00;    /* Fully opaque */
background-color: #bf0;       /* Fully opaque shorthand */

background-color: #11ffee00;  /* Fully transparent */
background-color: #1fe0;      /* Fully transparent shorthand  */
```

[GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-background-and-background-color/)

[Mozilla: background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)

<br>

**TJD** - MAYBE I SHOULD CHANGE EVERYTHING TO JUST BACKGROUND?

**ANSWER: NO.**

[Using Background vs. Background-Color in CSS, does it matter? (Yes)](https://techstacker.com/difference-between-background-and-background-color-in-css/)

**Important:** the background property will reset all previous declarations - be careful!

<br>

## border

The `border` property is a shorthand syntax for **drawing a line around** the element it is applied to.

```css
.box {
  border: 3px solid red;
  height: 200px;
  width: 200px;
}
```

[css-tricks: border](https://css-tricks.com/almanac/properties/b/border/)

<br>

## border-radius

AKA: **Rounded Corners**

The `border-radius` property defines the radius of an element's corners.

**[Border Radius Generator](https://border-radius.com/)**

CSS border radius generator for lazy people. ;)

<br>

## box-shadow

The `box-shadow` property attaches one or more shadows to an element.

```css
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
```

**[Box Shadow Generator](https://www.cssmatic.com/box-shadow)**
<!--https://getcssscan.com/css-box-shadow-examples-->

[Mozilla: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

<br>

## color

The `<color>` data type represents a color.

```css
/* Hexadecimal syntax */
#f09
#ff0099

/* Functional syntax */
rgb(255,0,153)

/* Hexadecimal syntax with alpha value */
#f09f
#ff0099ff

/* Functional syntax with alpha value */
rgb(255, 0, 153, 1)
rgb(255, 0, 153, 100%)

/* Whitespace syntax */
rgb(255 0 153 / 1)
rgb(255 0 153 / 100%)
/* The white-space CSS property sets how white space inside an element is handled. */
```

[Mozilla &lt;color&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

<br>

## content

The `content` property replaces an element with a generated value.

```css
.email-address::before {
   content: "Email address: ";
}
```

```html
<ul>
   <li class="email-address">chriscoyier@gmail.com</li>
</ul>
```

**Output:**<br>
• Email address: chriscoyier@gmail.com

[css-tricks: content](https://css-tricks.com/css-content/)

<br>

## counter-reset

The `counter-reset` property allows for automatic numbering of elements.
Like an ordered list.

```css
article {
  counter-reset: section;
}
section {
  counter-increment: section;
}
section h2:before {
  content: counter(section) '. ';
}
```

The `counter-reset` property is used to reset a counter to a given value.

[css-tricks: counter-reset](https://css-tricks.com/almanac/properties/c/counter-reset/)

<br>

## cursor

The `cursor` property controls what the mouse cursor will look like when it is located over the element in which this property is set.

They are used essentially for UX to convey the idea of certain functionality.

**[There are a bunch of them](https://css-tricks.com/almanac/properties/c/cursor/)**

<br>

## display

The `display` property specifies if / how an element is displayed.

Every element on a web page is a rectangular box. The `display` property determines just how that rectangular box behaves.

**[examples](https://css-tricks.com/almanac/properties/d/display/#aa-examples)**

<br>

## float

The `float` property specifies whether an element should float to the left, right, or not at all.

Note: `absolute`ly positioned elements ignore the float property!

**[All About Floats](https://css-tricks.com/all-about-floats/)**

<br>

## font

The `font` shorthand property sets all the different properties of an element's font.

Set some font properties with the shorthand declaration:

```css
p.a {
  font: 15px Arial, sans-serif;
}

p.b {
  font: italic small-caps bold 12px/30px Georgia, serif;
}
```

[Mozilla: font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

**[A complete collection of web safe CSS font stacks](https://www.cssfontstack.com/)**

**[Browse Fonts](https://fonts.google.com/)**

<br>

## font-family

The `font-family` property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

**Note:** If the font name is more than one word, it must be in quotation marks, like: `"Times New Roman"`

Values are separated by commas to indicate that they are alternatives.

```css
/* A font family name and a generic family name */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;
```

The browser will select the first font in the list that is installed or that can be downloaded using a `@font-face` at-rule.

```css
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

<br>

## font-size

The `font-size` property sets the size of the font.

Changing the font size also updates the sizes of the font size-relative units...

```css
font-size: 1.2em;

/* <absolute-size> values */
font-size: small;
font-size: medium;
font-size: large;

/* <relative-size> values */
font-size: smaller;
font-size: larger;

/* <length> values */
font-size: 12px;
font-size: 0.8em;

```

[Mozilla: font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)

<br>

## font-weight

Defines the weight of the text.

The `font-weight` property sets how thick or thin text characters should be displayed.

```css
p {
    color: red;
    font-weight: bold;
    font: 18px Arial, Helvetica, sans-serif;
}
```

<br>

## CSS Grid

To get started, you have to define a container element as a grid with `display: grid`, set the column and row sizes with `grid-template-columns` and `grid-template-rows`, and then place its child elements into the grid with `grid-column` and `grid-row`. Similarly to flexbox, the source order of the grid items doesn't matter.

[css-tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

<br>

## grid-column

Shorthand property for `grid-column-start` and `grid-column-end`.

**[cssreference.io](https://cssreference.io/property/grid-column/)**

The `grid-column` property specifies a grid item's size and location in a grid layout.

Make "item1" start on column 1 and span 2 columns:

```css
.item1 {
  grid-column: 1 / span 2;
}
```

You can use column-line values instead numbers of columns to span:

```css
.item1 {
  grid-column: 1 / 3;
}
```

`grid-column-start` Specifies on which column to start displaying the item.

`grid-column-end` Specifies on which column-line to stop displaying the item, or how many columns to span.

[w3schools: grid-column](https://www.w3schools.com/cssref/pr_grid-column.asp)

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)

**[A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)**

<br>

## grid-row

It's a shorthand property for: `grid-row-start` and `grid-row-end`.

The `grid-row` property specifies a grid item's size and location in a grid layout.

Make "item1" start on row 1 and span 2 rows:

```css
.item1 {
  grid-row: 1 / span 2;
}
```

You can use row-line values instead numbers of rows to span:

```css
.item1 {
  grid-row: 1 / 3;
}
```

`grid-row-start` Specifies on which row to start displaying the item.

`grid-row-end` Specifies on which row-line to stop displaying the item, or how many rows to span.

[w3schools: grid-row](https://www.w3schools.com/cssref/pr_grid-row.asp)

[Mozilla: grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)

<br>

# grid-template

The `grid-template` property is a shorthand property for defining grid columns, rows, and areas.

It's a shorthand property for: `grid-template-rows`, `grid-template-columns`, `grid-template-areas`.


**[Mozilla: try it](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template#try_it)**

<br>

**[Make a](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template)** three columns grid layout where the first row is 150px high:

```css
.grid-container {
  display: grid;
  grid-template: 150px / auto auto auto;
}
```
<br>
[CSS grid-template (explore all props)](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template)
<br>

**[Specify](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template2)** two rows, where "item1" spans the first two columns in the first two rows (in a five columns grid layout):

```css
.item1 {
  grid-area: myArea;
}
.grid-container {
  display: grid;
  grid-template:
    'myArea myArea . . .'
    'myArea myArea . . .';
}
```

<br>

**[Name all items](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template3)**, and make a ready-to-use webpage template:

```css
.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  display: grid;
  grid-template:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
}
```

**[Understanding CSS Grid: Grid Template Areas](https://www.smashingmagazine.com/understanding-css-grid-template-areas/)**

[Grid by Example](https://gridbyexample.com/examples/)<br>
Everything you need to learn CSS Grid Layout

[Grid Cheatsheet](https://yoksel.github.io/grid-cheatsheet/)

[CSS Grid Templates](https://www.quackit.com/html/templates/css_grid_templates.cfm)

quap.

<br>

```css
ms-grid-row
ms-grid-column
ms-grid-column-span
```

[mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)

[css-tricks](https://css-tricks.com/css-grid-in-ie-debunking-common-ie-grid-misconceptions/)

<br>

## height

The `height` property sets the height of an element.

The height of an element does not include padding, borders, or margins!

Set the height of two `<div>` elements:

```css
div.a {
  height: auto; /*automatically adjust its height to allow its content to be displayed correctl*/
  border: 1px solid black;
}

div.b {
  height: 50px; /*if the content does not fit within the specified height, it will overflow*/
  border: 1px solid black;
}
```

[w3schools: height](https://www.w3schools.com/cssref/pr_dim_height.asp)

<br>

## left

The `left` property affects the horizontal position of a positioned element. This property has no effect on non-positioned elements.

```css
/* This div element has position: absolute and left: auto. */
div.b {
  position: absolute;
  left: auto;
  width: 100px;
  height: 120px;
  border: 3px solid blue;
}

/* This div element has position: absolute and is placed 150 pixels to the right of the LEFT edge of the containing positioned element. */
div.c {
  position: absolute;
  left: 150px;
  width: 200px;
  height: 120px;
  border: 3px solid green;
}
```

[Mozilla: try it](https://developer.mozilla.org/en-US/docs/Web/CSS/left#try_it)

[w3schools: try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_position_left)

<br>

## list-style-type

The list-style-type specifies the type of list-item marker in a list.

(such as a disc, character, or custom counter style)

```css
list-style-type: space-counter;
```

[Mozilla: try it](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#try_it)

<br>

## margin

A shorthand property for setting all the `margin` properties in one declaration.

It's used to **create space** around elements, **outside** of any defined borders.

If the margin property has four values:

```css
margin: 25px 50px 75px 100px;
```

It goes clockwise:

```
margin-top is 25px
margin-right is 50px
margin-bottom is 75px
margin-left is 100px
```

You can set the margin property to `auto` to horizontally center the element within its container.  (container can be the body of the page)

```css
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```

[w3schools: margins](https://www.w3schools.com/css/css_margin.asp)

<br>

## margin-left

Sets the `left` margin of an element.

A positive value places it farther from its neighbors, while a negative value places it closer.

```css
p {
  margin-left: 80px;
}
```

[Mozilla: margin-left](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left#try_it)

<br>

## margin-right

Sets the `right` margin of an element.

A positive value places it farther from its neighbors, while a negative value places it closer.

```css
p {
  margin-right: 150px;
}
```

[Mozilla: margin-right](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right#try_it)

<br>

## min-width

The `min-width` property defines the minimum width of an element.

Set the minimum width of a <span> element to 500 pixels:

```css
span.ex1 {
  min-width: 500px;
}
```

### content &lt; `min-width`

If the content is smaller than the minimum width, the minimum width will be applied.

### content &gt; `min-width`

If the content is larger than the minimum width, the min-width property has no effect.

[w3schools: min-width](https://www.w3schools.com/cssref/pr_dim_min-width.asp)

<br>

## opacity

The opacity property specifies *how transparent* an element is.

```css
div {
  opacity: 0.5;
}
```

[css-tricks: opacity](https://css-tricks.com/almanac/properties/o/opacity/)

<br>

## outline

An `outline` is a line that is drawn around elements, **outside** its border, to make the element "stand out".

Unlike other areas of the box, outlines don't take up space, so they don't affect the layout of the document.

[Mozilla: try it](https://developer.mozilla.org/en-US/docs/Web/CSS/outline#try_it)

<br>

## overflow

The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

[Mozilla: overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#try_it)

<br>

## overflow-x

The `overflow-x` property specifies whether to clip the content, add a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges.

In other words, it helps us to display the content which is overflowing from the page **horizontally**.

**auto:** It provides a scrolling mechanism for overflowing boxes.

**scroll:** It is used to clip the content and providing a scrolling mechanism.

**hidden:** It is used to clip the content and no scrolling mechanism is provided.

**visible:** This property does not clip the content. The content may be rendered outside the left and right edges.

```css
overflow-x: visible | hidden | scroll | auto | initial | inherit;
```

[GeeksforGeeks](https://www.geeksforgeeks.org/css-overflow-x-property/)

<br>

## overflow-y

Use the `overflow-y` property to determine clipping at the top and bottom edges.

```css
overflow-y: scroll | hidden | visible | auto
```

**Scroll:** The content is clipped and the scrollbar is displayed, no matter what.

**Hidden:** It hides it; no scrollbar for you.

**Visible:** Content not clipped, allowed to overflow.

**auto:** it does it for you.

[GeeksforGeeks](https://www.geeksforgeeks.org/css-overflow-y-property/)


<br>

## padding

The `padding` properties are used to generate space around an element's content, **inside** of any defined borders.

An element's `padding` is the space between its content and its border.

```css
div {
  padding: 25px 50px 75px 100px;
}
```

<br>

## pointer-events

The `pointer-events` property allows for control over how HTML elements respond to mouse/touch events.

### Useful!

The prime use case for pointer-events is to allow click or tap behavior to "pass through" an element to another element below it on the Z axis.

For example, this would be useful for graphic overlays, or hiding elements with opacity (eg. tooltips) and still allowing text-selection on the content below it.

**`none`** prevents all click, state and cursor options on the specified element.

**`auto`** restores the default functionality (useful for use on child elements of an element with `pointer-events: none;` specified).

```html
<p>This is some basic flow content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos ipsum sunt repellat nisi modi voluptatum ipsa eligendi minima cumque. Accusantium laudantium autem quae earum eaque expedita quia molestiae in.</p>

<div class="avoid-clicks">try selecting text through me</div>
```

```css
.avoid-clicks {
  position: absolute;
  top: 1em;
  left: 4em;

  display: block;

  width: 8em;
  height: 8em;
  padding: .75em;

  pointer-events: none;

  color: whitesmoke;
  background: rgba(51, 51, 51, .85);
}

body {
  font: 14px/1.4 'Trebuchet MS', sans-serif;

  max-width: 600px;
  padding: 3em;

  background: whitesmoke;
}

p {
  padding: .75em;

  background: #ddd;
}
```

[mozilla: pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events#try_it)

[css-tricks: pointer-events](https://css-tricks.com/almanac/properties/p/pointer-events/)

<br>

## position

The `position` property sets how an element is positioned in a document.

The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.

```css
position: absolute;
top: 40px; left: 40px;
```


```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

### [mozilla: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position#try_it)

### [css-tricks: position](https://css-tricks.com/almanac/properties/p/position/)

<br>

## text-align

The `text-align` property is used for aligning the inner content of a block element.

```css
.main {
  border: 1px solid black;
}

.gfg1 {
  text-align: left;
}

.gfg2 {
  text-align: right;
  ;
}

.gfg3 {
  text-align: center;
}

.gfg4 {
  text-align: justify;
}
```

```html
<div class="main">
<h3>text-align: left;</h3>
<div class="gfg1">Blow</div>
</div><br>

<div class="main">
<h3 style="text-align: right;">text-align: right;</h3>
<div class="gfg2">Up</div><br>
</div>

<div class="main">
<h3 style="text-align: center;">text-align: center;</h3>
<div class="gfg3">The</div>
</div><br>

<div class="main">
<h3 style="text-align: justify;">text-align: justify;</h3>
<div class="gfg4">Pool Toy</div>
</div>
```

### [css-tricks: text-align](https://css-tricks.com/almanac/properties/t/text-align/)

### [GeeksforGeeks: text-align](https://www.geeksforgeeks.org/css-text-align-property/)
<br>

## text-decoration

The `text-decoration` shorthand property sets the appearance of decorative lines on text.

It adds an underline, overline, line-through, or a combination of lines to selected text.

```css
text-decoration: underline dotted;

text-decoration: underline dotted red;

text-decoration: green wavy underline;

text-decoration: underline overline #FF3028;
```

The property `text-decoration-line` is used to underline the text.

The `text-decoration-color` property specifies the color of the text-decoration (underlines, overlines, linethroughs).

The `text-decoration-thickness` property sets the stroke thickness of the decoration line that is used on text in an element.

The `text-decoration-style` property sets the style of the lines specified by text-decoration-line.

[mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration#try_it)

[css-tricks](https://css-tricks.com/almanac/properties/t/text-decoration/)

<br>

## What's the difference between css overflow and text-overflow?

The `overflow` property specifies whether to clip content, render scroll bars or display overflow content of a block-level element.

The `text-overflow` property determines how overflowed content that is not displayed is signaled to users.

[teamtreehouse](https://teamtreehouse.com/community/what-is-the-difference-between-the-overflow-property-and-the-textoverflow-property)

<br>

## text-overflow

The text-overflow property in CSS deals with situations where text is clipped when it overflows the element's box.

It can be clipped (i.e. cut off, hidden), display an ellipsis ('...', Unicode Range Value U+2026) or display an author-defined string (no current browser support for author-defined strings).

```css
#example-element-container {
  width: 100%;
  max-width: 18em;
}

#example-element {
  font-family: sans-serif;
  line-height: 50px;

  overflow: hidden;

  padding: .5em;

  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;

  border: 1px solid #c5c5c5;
}
```

```html
<div id="output" class="output hidden">
  <section id="default-example">
    <div id="example-element-container">
      <p id="example-element">"Is there any tea on this spaceship?" he asked.</p>
    </div>
  </section>
</div>
```

[mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow#try_it)

[css-tricks](https://css-tricks.com/almanac/properties/t/text-overflow/)

<br>

## text-shadow

The `text-shadow` CSS property adds shadows to text.

It accepts a comma-separated list of shadows to be applied to the text.

### [css-tricks: text-shadow]()

### Down and to the right:

Using positive numbers as the first two values ends up with placing the shadow to the right of the text horizontally (first value)

and placing the shadow below the text vertically (second value).

```css
p {
  text-shadow: 1px 1px 1px #000,
               3px 3px 5px blue; /* so this means there's more of it */
}
```

```
1. value = The X-coordinate
2. value = The Y-coordinate
3. value = The blur radius
4. value = The color of the shadow
```

### [Cool Examples](https://html-css-js.com/css/generator/text-shadow/)

```html
<div id="demotext">Flaming</div>
```

```css
/* FLAMING */
#demotext {
  color: #fff;
  background: #333;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #f00;
}
```

```css
/* HERO */
#demotext {
  color: #fff;
  background: #005dff;
  text-shadow: -5px 5px 0 #00e6e6, -10px 10px 0 #01cccc, -15px 15px 0 #00bdbd;
}
```

<br>

## top

Defines the position of the element according to its top edge.

This property has no effect on non-positioned elements.

```css
top: auto;
```

The element will remain in its natural position.

```css
top: 20px;
```

If the element is in position relative, the element will move downwards by the amount defined by the top value.

```css
top: 0;
```

If the element is in position absolute, the element will position itself from the top of the first positioned ancestor.

```html
<div class="example-output-div top" id="top-auto">
  <p>Parent container</p>
  <div class="natural">Natural position</div>
  <div class="actual">Actual position</div>
</div>
```

### [css reference](https://cssreference.io/property/top/)

<br>

## transform

The `transform` property lets you rotate, scale, skew, or translate an element.

```css
div.a {
    width: 150px;
    height: 80px;

    -ms-transform: rotate(20deg); /* IE 9 */
        transform: rotate(20deg);

    background-color: yellow;
}

div.b {
  transform: skewY(20deg);
}

div.c {
  transform: scaleY(1.5);
}
```

### [w3schools](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_transform)

### [css-tricks](https://css-tricks.com/almanac/properties/t/transform/)

<br>

## transition

`transitions` provide a way to control animation speed when changing properties.

Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.

```css
transition: background-color 2s ease-in-out 1s;

transition: <property> <duration> <timing-function> <delay>;
```

### Example

```css
.animated_div {
    font-size: 15px;
    font-weight: bold;

    position: absolute;

    float: left;

    width: 60px;
    height: 40px;
    margin: 5px;
    padding: 10px;

    -webkit-transition: -webkit-transform 1s,opacity 1s,background 1s,width 1s,height 1s,font-size 1s;
    -moz-transition-duration: 1s,1s,1s,1s,1s,1s;
      -o-transition-duration: 1s,1s,1s,1s,1s,1s;
         transition-duration: 1s,1s,1s,1s,1s,1s;
    -moz-transition-property: width,height,-o-transform,background,font-size,opacity;
      -o-transition-property: width,height,-o-transform,background,font-size,opacity;
         transition-property: width,height,transform,background,font-size,opacity;

    opacity: .4;
    color: #fff;
    -webkit-border-radius: 5px;
            border-radius: 5px;
    background: #92b901;
  }

  .animated_div:hover {
    font-size: 35px;

    width: 130px;
    height: 80px;

    opacity: 1;
    background: #1ec7e6;
  }
```

```html
<p>CSS transitions allows you to change property values smoothly, over a given duration.</p>
<p><strong>Mouse over the element below to see a CSS transition effect:</strong></p>
<div style="height:90px;">
  <div class="animated_div">CSS</div>
</div>
```

[mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

[w3schools](https://www.w3schools.com/css/css3_transitions.asp)

The `-webkit-transition` Boolean CSS media feature is a Chrome extension whose value is true if the browsing context supports CSS transitions.

```css
transition: [property] [duration] [timing function] [delay]

-moz-transition: background-color 2s ease-in-out 1s;

-webkit-transition: Chrome

–o-transition: Opera
```

The `–moz-transition` property, which is shorthand for a set of individual components of the transition, is a Mozilla (Gecko) vendor-specific property, supported by Firefox. It allows you to set all the transition parameters in one line of code.

In the same way, `-webkit-transition property` is supported by Google Chrome and Safari browsers, and `-o-transition` is supported by Opera.

### [web-plus-plus](https://www.web-plus-plus.com/Articles/css-transition-moz-and-webkit-vs-css3)

<br>
# white-space

The `white-space` property sets how white space inside an element is handled.

```css
p.a {
  white-space: nowrap;
}

p.b {
  white-space: normal;
}

p.c {
  white-space: pre;
}
```

[mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space#try_it)

<br>

## width

The `width` property sets an element's width.

By default, it sets the width of the content area,
but if box-sizing is set to `border-box`,
it sets the width of the border area.

```css
.wrap {
  width: 80%;
}
```

[css-tricks](https://css-tricks.com/almanac/properties/w/width/)

[mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/width#try_it)

<br>

## z-index

The `z-index` property sets the z-order of a positioned element and its descendants or flex items.

Overlapping elements with a larger z-index cover those with a smaller one.

The `z-index` property specifies the stack order of an element.

An element with greater stack order is always in front of an element with a lower stack order.

```css
/* ON TOP: */
.div1 {
  position: absolute;
  z-index: 2;
  top: 100px;
  left: 100px;

  width: 200px;
  height: 200px;

  background-color: #fe2f6c;
}

/* "BOTTOM" */
.div2 {
  position: absolute;
  z-index: 1;

  width: 200px;
  height: 200px;

  background-color: #00e525;
}
```

```html
<div class="div1"></div>
<div class="div2"></div>
```

[css-tricks](https://css-tricks.com/almanac/properties/z/z-index/)

[mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index#try_it)

## webkit-user-drag

The non-standard `-webkit-user-drag` property can be used to either make an element **draggable** or explicitly non-draggable (like links and images).

[webkit user-drag](https://caniuse.com/webkit-user-drag)

`moz-user-drag`: same thing, but in Firefox.
  
## voice-family

[tutorialspoint](https://www.tutorialspoint.com/css/css_voice-family.htm)

The voice-family property is used to define the specific voice, and optionally a generic voice type, which is to be used in the speaking of content.
  
```css
h1 { voice-family: announcer, male }
p.part.romeo  { voice-family: romeo, male }
p.part.juliet { voice-family: juliet, female }
```

<!--
# TJD

Maybe create a page with a text box where I can just plug in the property and it opens these websites.

https://css-tricks.com/almanac/properties/t/text-align/
https://www.geeksforgeeks.org/css-text-align-property/
https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
(https://www.w3schools.com/cssref/pr_text_text-decoration.asp)
-->
