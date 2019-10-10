# download-html-as-image
Save the HTML (DOM) as Image (JPG, PNG)


## Dependency

We use a collection of packages for generate image and download, all in one action.
The packages are:

- 'file-saver'
- 'html-to-image'
- 'save-svg-as-png'

## Usage

```
import { saveAsPng } from 'saveAsPng-html-to-image';

const node = document.getElementById('elementId');

saveAsPng(node);

```
