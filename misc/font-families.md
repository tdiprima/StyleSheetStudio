## CSS Font Families

<span style="color:#0000dd;">Are there standard font-families to use in CSS?  Like, if certain fonts look alike (or "go together"), they're in the same family?</span>

The term "font family" usually refers to the group of related typefaces you can use to style your text. Font families in CSS can be categorized into two broad groups:

1. **Generic Font Families**: These are general fallbacks and typically consist of the following:

    - `serif`: Fonts that have a small line attached to the end of a stroke in a letter or symbol. Examples include Times New Roman, Georgia, etc.
    - `sans-serif`: Fonts that don't have these lines attached. Examples include Arial, Helvetica, Verdana, etc.
    - `monospace`: Every character in these fonts occupy the same amount of space. Examples include Courier New, Lucida Console, etc.
    - `cursive`: Fonts that emulate handwritten, calligraphic styles. Examples include Brush Script MT, Lucida Handwriting, etc.
    - `fantasy`: Decorative fonts. Examples are less standardized, but think of fonts like Impact or playful fonts.
    
    Generic font families are useful as they allow browsers to pick an appropriate font from the user's system when a specific font isn't available.

2. **Specific Font Families**: These are the exact typefaces you specify. For instance, "Arial", "Times New Roman", "Helvetica", "Roboto", etc.

When specifying fonts in CSS, it's a common practice to list both specific and generic font families to ensure that if a specific font isn't available on a user's machine, their browser can fall back to a generic font that's similar. For example:

```css
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

Here, if the browser doesn’t have "Helvetica Neue", it will try "Helvetica", then "Arial", and if none of those are available, it will fall back to any available `sans-serif` font on the user's system.

So while CSS doesn't classify fonts as looking alike into the same "family," it does provide a mechanism to ensure graceful degradation based on available fonts. However, when designers talk about font families or pairings, they're often discussing specific fonts that work well together from a design perspective, but this is more of a design choice than a technical categorization.

## Tahoma

<span style="color:#0000dd;">I learned that this is Microsoft's alternative to Arial.</span>

<span style="color:#0000dd;">What might be some typefaces related to Tahoma? (What fonts work well together with Tahoma?)</span>

Tahoma is a humanist sans-serif typeface designed by Matthew Carter for Microsoft Corporation. It was released in 1994 and became a standard font on Windows operating systems. Because of its widespread use on Windows, Tahoma is recognized for its clear legibility at small sizes and its versatile appearance.

If you're looking for typefaces that are visually or functionally related to Tahoma, here are some you might consider:

1. **Verdana**: Also designed by Matthew Carter for Microsoft, Verdana is visually similar to Tahoma but has wider characters and is optimized for screen readability. It's often used on the web for its clarity at small sizes.

2. **Segoe UI**: This is the default typeface for many Microsoft products including Windows Vista and later versions. It bears a resemblance to Tahoma and Verdana but has its own unique characteristics.

3. **Geneva**: An older font used primarily on Apple systems. It's a sans-serif font with similarities to Tahoma, especially in its older versions.

4. **Frutiger**: A humanist sans-serif typeface designed by Adrian Frutiger. It has influenced many other typefaces, including Tahoma and Verdana. Frutiger has a warm and friendly appearance, which makes it similar in feel to Tahoma.

5. **Myriad**: An Adobe typeface that shares some visual similarities with Tahoma, particularly in its proportions and some of its character shapes.

6. **Trebuchet MS**: Another Microsoft typeface, designed by Vincent Connare. It has a bit more character than Tahoma, with some unique design touches, but still maintains a certain kinship due to its origin and purpose.

7. **Arial**: While Arial is more neutral and less humanist than Tahoma, it's another sans-serif font that's widely available and often used in similar contexts.

When choosing a typeface related to Tahoma, your specific needs and the context in which you'll use the font are crucial. If you want a typeface for screen readability, Verdana or Segoe UI might be suitable. If you're looking for something with a similar feel but a different look, Frutiger or Myriad could be good choices. Always preview and test the typeface in your intended setting to ensure it meets your requirements.

<br>
