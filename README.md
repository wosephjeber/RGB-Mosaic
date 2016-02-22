# RGB mosaic

Exposing the RGB color model behind your digital images.

## What's going on here?

If you haven't already, [take a look at the mosaic here](http://wosephjeber.com/RGB-Mosaic). Look at the mosaic up close, and then step away from your screen (10 or 15 feet if you can) and take a look.

The mosaic generator reads the RGB values of each pixel and outputs them as text, with each color component displayed at its designated intensity (between 0 and 255 in the RGB colorspace). The result is a mosaic that up close is just a bunch of red, green, and blue numbers, but from far away starts to resolve into the distinct colors of the original photo.

Disclaimers:

- This mosaic needs a large screen to achieve the full effect. My Macbook's 1280x800 display lets me see a fraction of the full mosaic, but it's enough to get a sense for what it's all about. The bigger the monitor the better. 
- Not every image works well with this type of mosaic. Images with fewer details and high contrast between lights and darks work best. Closely-cropped portraits against a dark background are ideal.
- There are some performance issues with my current implementation, so you might experience some janky transitions, or your browser might hang for a few seconds as it's rendering the tens-of-thousands of text nodes the mosaic creates. More on that in the background section below.

## Some background

I had the idea several years ago to create a photo mosaic made up of the RGB values of a digital image's pixels. I thought that it would be both visually interesting and also instructive, as most people likely don't know much about how digital images work. I made a rough prototype using PHP to process the image's pixels, showed it to a few friends, and then forgot about it.

About a year ago, that initial prototype crossed my mind, and I thought it would be the sort of thing that would be perfect to share on GitHub. The only problem was that it relied on a server-side language, and I didn't care to set up hosting just for this one page.

A few months ago, I stumbled upon some creative uses of the `<canvas>` element for photo manipulation, and it hit me that I could use `<canvas>` and Javascript to recreate the experiment entirely in the browser.

What you see here is a work in progress. It accomplishes my goal, but my current implementation has some performance issues. I'm using the Javascript canvas API to read the RGB values of an image's pixels and outputting those values at text nodes in HTML. A 100x130 pixel image has 13,000 pixels, and I'm outputting a text node for each color value. So that's 39,000 nodes the browser has to render! Needless to say, the browser hangs for a second or two when drawing/redrawing all those nodes, and that leads to some janky transitions and animations in the UI.

For my next iteration of this mosaic, I'm planning on using `<canvas>` not only to read and modify the images pixels but also to render the final output in hope that it will render more efficiently.
