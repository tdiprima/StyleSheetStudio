## How to use a downloaded font

<span style="color:#0000dd;">I downloaded a font "TradeWinds-Regular.ttf".  How do I use it in my html?</span>

To use a custom font like "TradeWinds-Regular.ttf" in your HTML, you'll need to use the `@font-face` rule in your CSS. Here's how you can do it:

1. **Upload the Font to Your Server**: First, ensure that the "TradeWinds-Regular.ttf" file is uploaded to your server, preferably in a dedicated "fonts" folder.

2. **Use the `@font-face` rule in CSS**: In your CSS, you'll need to add the `@font-face` rule to specify the custom font.

```css
@font-face {
    font-family: 'TradeWinds';
    src: url('fonts/TradeWinds-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
```
(Note: The `url` value should be the relative path from your CSS file to the font file.)

3. **Use the Font in Your HTML**: Once you've declared the font using `@font-face`, you can use it in your HTML by referencing it in your CSS:

```css
body {
    font-family: 'TradeWinds', sans-serif;
}
```

4. **Include the CSS in Your HTML**: If your CSS is external, don't forget to link the CSS file in your HTML:

```html
<link rel="stylesheet" type="text/css" href="path_to_your_stylesheet.css">
```

5. **Test**: It's always a good practice to test your website in different browsers to ensure that the font is loading and displaying correctly.

Remember: Using custom fonts can affect the load time of your web page, especially if the font file is large. Always consider the impact on performance and user experience when adding custom fonts.

## Font Name

<span style="color:#0000dd;">What's the name of this font?</span>

Here are some popular font identification tools and websites:

1. **WhatTheFont**: This is a tool by MyFonts where you can upload an image and it will try to match the font used in the picture.

2. **Font Squirrel Matcherator**: Font Squirrel's Matcherator also lets you upload an image to identify the font. 

3. **Identifont**: This website allows you to identify fonts by answering a series of questions about the appearance of letters in the font you're trying to identify.

4. **Fonts In Use**: An archive of fonts used in popular works, allowing you to search by style, industry, and more.

5. **Fontspring Matcherator**: Similar to the others, it allows you to upload an image to find the font.

Always remember, these tools might not always find an exact match, especially if the font is custom or not widely used. They should, however, get you close or suggest similar-looking fonts.

<br>
