## Advanced positioning

https://www.internetingishard.com/html-and-css/advanced-positioning/

**Static positioning** refers to the normal flow of the page.

![positioned-elements](https://www.internetingishard.com/html-and-css/advanced-positioning/positioned-elements-terminology-861fca.png)

**Relative positioning** moves elements around relative to where they would normally appear in the static flow of the page. 

This is useful for nudging boxes around when the default flow is just a little bit off.

![relative-positioning](https://www.internetingishard.com/html-and-css/advanced-positioning/css-relative-positioning-26842e.png)

**Absolute positioning** is just like relative positioning, but the offset is relative to the entire browser window instead of the original position of the element.

Since there's no longer any relationship with the static flow of the page, consider this the most manual way to lay out an element.

![absolute-positioning](https://www.internetingishard.com/html-and-css/advanced-positioning/css-absolute-positioning-228ce0.png)

**(relatively) absolute positioning**

Absolute positioning becomes much more practical when it's relative to some other element that is in the static flow of the page. 

Fortunately, there's a way to change the coordinate system of an absolutely positioned element.

![](https://www.internetingishard.com/html-and-css/advanced-positioning/css-relatively-absolute-positioning-1ba963.png)

**Fixed positioning** has a lot in common with absolute positioning: it's very manual, the element is removed from the normal flow of the page, and the coordinate system is relative to the entire browser window. 

The key difference is that fixed elements don't scroll with the rest of the page.

![](https://www.internetingishard.com/html-and-css/advanced-positioning/css-fixed-positioning-342eff.png)
