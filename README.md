# download-html-to-image
Download the HTML (DOM) to Image (JPG, PNG)


## Dependency

We use a collection of packages for generate image and download, all in one action.
The packages are:

- 'file-saver'
- 'save-svg-as-png'
- 'html-to-image'

## Usage

```
import { downloadAsPng } from 'download-html-to-image';

const node = document.getElementById('elementId');

downloadAsPng(node);

```
