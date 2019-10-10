# save-html-as-image
This can be used for a couple of things, it can save HTML (DOM) as an image (JPG,PNG) and it can convert SVG images to PNG.

Convering SVG to PNG is useful for Safari Browser compatibility since it cannot render SVG images.

## Dependency

We use a collection of packages to generate and donwnload images, all in one action.
The packages are:

- 'file-saver'
- 'html-to-image'
- 'save-svg-as-png'

## Usage

```js
import { saveAsPng } from 'save-html-as-image';

const node = document.getElementById('elementId');

//download the node as png
saveAsPng(node);

```
