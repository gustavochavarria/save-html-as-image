# save-html-as-image
Save the HTML (DOM) as Image (JPG, PNG)


## Dependency

We use a collection of packages for generate image and download, all in one action.
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
