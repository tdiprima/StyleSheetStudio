## CSS Slide-in Animation

<span style="color:#0000dd;font-size:larger;">The entire nav-bar slides down from the top.  Like - from hidden, into view.  See: vibrant_cannon/menus/wicked.html</span>

```css
/* Keyframe definition for Webkit */
@-webkit-keyframes slide-in-from-top {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}

/* Standard keyframe definition */
@keyframes slide-in-from-top {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}
```

<br>
This CSS defines keyframe animations for an element to "slide in" from the top.

1. **@-webkit-keyframes slide-in-from-top**: This is the keyframe definition for Webkit-based browsers (like Chrome and Safari). 

2. **@keyframes slide-in-from-top**: This is the standard keyframe definition that should be recognized by all modern browsers.

Both of the above keyframes define the same animation but ensure broader browser compatibility.

The animation itself works as follows:

- **0%**: At the beginning of the animation (`0%`), the element is translated upwards by its own full height (`translateY(-100%)`). This essentially places the element just outside of the visible area at the top.

- **100%**: By the end of the animation (`100%`), the element is translated back to its original position (`translateY(0)`). This means the element will have moved from being entirely off the top of the screen to its normal position.

When applied to an element, this animation will make it look like the element is **sliding into view from the top.**

However, note that to actually see the animation effect on an element, you'd need to assign this keyframe animation to that element using the `animation-name` property and also specify the duration, timing, etc., with the `animation` shorthand property or its longhand equivalents.

## Like this?

```css
.navbar {
    overflow: hidden;

    -webkit-transition: background-color .2s linear;
    -o-transition: background-color .2s linear;
    transition: background-color .2s linear;

    -webkit-animation: 1s ease-out 0s 1 slide-in-from-top;
    animation: 1s ease-out 0s 1 slide-in-from-top;

    background-color: var(--text-light);
}
```

<br>

Yes, that's correct! You've applied the `slide-in-from-top` animation to the `.navbar` class. Here's what the CSS does:

1. **overflow: hidden;**: Ensures that any content outside the bounds of the `.navbar` element is hidden. This is useful especially when animating, as it ensures that parts of the element being animated that go outside the bounds won't be shown.

2. **transition properties**:
   - `-webkit-transition`, `-o-transition`, and `transition` are used to define a transition effect for the background color of the `.navbar`. 
   - When the background color of the `.navbar` changes, it will transition smoothly over `.2s` (or 200 milliseconds) in a linear fashion.

3. **animation properties**:
   - `-webkit-animation` and `animation` apply the `slide-in-from-top` animation to the `.navbar`.
   - The animation will run for `1s` (or 1 second) with an `ease-out` timing function. This means the animation starts at a regular speed and slows down towards the end, providing a decelerating effect.
   - `0s` is the delay before the animation starts. In this case, there's no delay.
   - `1` means the animation will play once.

4. **background-color**: Sets the background color of the `.navbar` to a custom CSS variable `--text-light`.

With this CSS, when the `.navbar` element loads, it should appear to slide in from the top over the course of 1 second, due to the `slide-in-from-top` animation. If its background color changes, it will transition smoothly over 0.2 seconds.

<br>
