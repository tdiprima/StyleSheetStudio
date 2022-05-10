## [Vendor-specific Properties](https://www.sitepoint.com/vendor-specific-properties/)

<br>

<table cellpadding="0" cellspacing="0" border="1" id="vendorspecific__tbl_vendor-specific-extensions_vendor-extension-prefixes">
<caption><span class="tablecap">Table 1. Vendor Extension Prefixes</span></caption>
<thead align="left">
<tr>
<th id="d5977e87" class="firstcol width16.666666666666664">Prefix</th>
<th class="width83.33333333333334" id="d5977e90">Organisation</th>
</tr>
</thead>
<tbody>
<tr>
<th id="d5977e99" class="firstcol width16.666666666666664" headers="d5977e87"><code class="codeph">-ms-</code></th>
<td class="width83.33333333333334" headers="d5977e99 d5977e90">Microsoft</td>
</tr>
<tr>
<th id="d5977e109" class="firstcol width16.666666666666664" headers="d5977e87"><code class="codeph">mso-</code></th>
<td class="width83.33333333333334" headers="d5977e109 d5977e90">Microsoft Office</td>
</tr>
<tr>
<th id="d5977e119" class="firstcol width16.666666666666664" headers="d5977e87"><code class="codeph">-moz-</code></th>
<td class="width83.33333333333334" headers="d5977e119 d5977e90">Mozilla Foundation (<a title="" href="http://en.wikipedia.org/wiki/Gecko_(layout_engine)">Gecko-based browsers)</a></td>
</tr>
<tr>
<th id="d5977e131" class="firstcol width16.666666666666664" headers="d5977e87"><code class="codeph">-o-</code></th>
<td class="width83.33333333333334" headers="d5977e131 d5977e90">Opera Software</td>
</tr>
<tr>
<th id="d5977e141" class="firstcol width16.666666666666664" headers="d5977e87"><code class="codeph">-atsc-</code></th>
<td class="width83.33333333333334" headers="d5977e141 d5977e90">Advanced Television Standards Committee</td>
</tr>
<tr>
<th id="d5977e151" class="firstcol width16.666666666666664" headers="d5977e87"><code class="codeph">-wap-</code></th>
<td class="width83.33333333333334" headers="d5977e151 d5977e90">The WAP Forum</td>
</tr>
<tr>
<th id="d5977e161" class="firstcol width16.666666666666664" headers="d5977e87"><code class="codeph">-webkit-</code></th>
<td class="width83.33333333333334" headers="d5977e161 d5977e90">Safari (and other <a title="" href="http://trac.webkit.org/projects/webkit/wiki/Applications%20using%20WebKit">WebKit-based browsers)</a></td>
</tr>
<tr>
<th id="d5977e173" class="firstcol width16.666666666666664" headers="d5977e87"><code class="codeph">-khtml-</code></th>
<td class="width83.33333333333334" headers="d5977e173 d5977e90">Konqueror browser</td>
</tr>
</tbody>
</table>

<br>

Although these extensions can be useful at times, it's still recommended that you avoid using them unless it's absolutely necessary.

It's also worth noting that, as is usually the case with proprietary code, the extensions will not pass CSS validation.

If you must use extensions, you should use those that are closely related to equivalent CSS properties (be that CSS1, 2, or 3), so that you can switch to the standard property later on, and remove the extension when the browser implements the correct specification.

<br>

### Example:

```css
.test {
  width:100%;                /* Required for IE filter */
  background: red;

  /* IE filter extension */
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=60);

         opacity: 0.6;     /* the correct CSS3 syntax */
    -moz-opacity: 0.6;     /* Mozilla extension */
  -khtml-opacity: 0.6;     /* Konqueror extension (Safari 1.1) */
}
```
<br>

### [Vendor-prefixed CSS Property Overview](https://peter.sh/experiments/vendor-prefixed-css-property-overview/)
<br>

### [Vendor-prefixed CSS Properties (WebKit)](https://peter.sh/experiments/vendor-prefixed-css-properties-webkit/)
<br>

### [Vendor-prefixed CSS Properties (Gecko / Mozilla)](https://peter.sh/experiments/vendor-prefixed-css-properties-gecko/)
<br>

### [Ordering of vendor-specific CSS declarations](https://stackoverflow.com/questions/7080605/ordering-of-vendor-specific-css-declarations)
<br>

## [Accessing vendor-specific CSS properties w/JavaScript](https://stackoverflow.com/questions/10729620/accessing-vendor-specific-css-properties-w-javascript)

Use upper camel case, e.g., `el.style.MozTransition`.

### Example:

```html
<div id="asdf" style="height: 200px; width: 200px; padding: 50px; border: solid 10px #987">
    asdf
</div>
```

```js
document.getElementById("asdf").style.MozBoxSizing = "border-box";
```
<br>

### ex: `-webkit-box-shadow`

```js
.style.setProperty("-webkit-box-shadow", "0 0 7px #ccc", null);
.style.removeProperty("-webkit-box-shadow");
.style["-webkit-box-shadow"];
```
<br>
