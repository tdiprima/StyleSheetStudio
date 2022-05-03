# SASS

### Compile

```bash
sudo npm i -g sass

sass <input.scss> [output.css]

sass --watch scss/style.scss css/style.css
```

### Convert

```bash
css-to-scss: deprecated
styleflux: deprecated

# No, but...
npm install -g node-sass

node-sass my-styles.scss my-styles.css

cat <input.scss> | node-sass > output.css

```

## VSCode Settings

$HOME/Library/Application\ Support/Code/User/settings.json

shift-ctrl-P open default settings (defaultSettings.json)

search for: liveSassCompile

```json
{
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded", 
      "extensionName": ".css", 
      "savePath": "/css"
    }
  ], 
  "liveSassCompile.settings.generateMap": false
}
```

## [Crash course](https://youtu.be/nu5mdN2JIwM) by Traversy Media

[Definitions](https://youtu.be/UlOzbc219AM) by Codecademy (yes, that's how they spelled it).

Meh.  Not impressed.  But who's teaching?

Codecademy's Learn Sass course: [https://j.mp/3xI3D2K](https://j.mp/3xI3D2K)

## What is the difference between SCSS and SASS ?

[geeks for geeks](https://www.geeksforgeeks.org/what-is-the-difference-between-scss-and-sass/)

**SASS** (Syntactically Awesome Style Sheets) is a pre-processor scripting language that will be compiled or interpreted into **CSS**. SassScript is itself a scripting language whereas **SCSS** is the main syntax for the SASS which builds on top of the existing CSS syntax. It makes use of semicolons and brackets like CSS (Cascaded Style Sheets).

SASS and SCSS can import each other.

Sass actually makes CSS more powerful with math and variable support. 

* SASS follows strict indentation, SCSS has no strict indentation.

* SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use of semicolons and braces are mandatory.
