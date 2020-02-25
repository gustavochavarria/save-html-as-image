/* jslint browser */

import { saveAs } from 'file-saver';
import { toPng, toJpeg } from 'html-to-image';

import {
  DEFAULT_OPTIONS,
  fixColorSvg,
  fixSizeSvg,
  fixText,
  hardFixText,
  replaceFontAwesomeIconsWithImages
} from './utils';

let ORIGINAL_PADDING = null;

/**
 *
 * @param {Document} node
 */
const setTemporalPadding = node => {
  ORIGINAL_PADDING = node.style.padding;
  node.style.padding = '3px';
};

/**
 *
 * @param {Document} node
 */
const revertPadding = node => {
  node.style.padding = ORIGINAL_PADDING;
};

/**
 *
 * @param {Document} node
 * @param {Boolean} forceFixText
 */
const applyFixs = (node, forceFixText = false) => {
  const svgs = node.querySelectorAll('svg');

  fixText(node);

  if (forceFixText) {
    hardFixText(node);
  }

  for (const el of svgs) {
    fixColorSvg(el);
    fixSizeSvg(el);
  }
};

const getOptions = userOptions => {
  return {
    ...DEFAULT_OPTIONS,
    ...userOptions
  };
};

const getFileName = options => {
  if (options.printDate) {
    const date = new Date().toDateString();

    return `${options.filename} (${date})`;
  }

  return options.filename;
};

/**
 *  Save html as Jpeg Image
 *
 * @param {*} node
 * @param {*} userOptions
 */
export const saveAsJpeg = async (node, userOptions = {}) => {
  const options = getOptions(userOptions);
  let canvas = null;

  applyFixs(node, options.forceFixText);

  setTemporalPadding(node);

  try {
    canvas = await toJpeg(node, {
      style: { boxShadow: 'none' }
    });
  } catch {
    /* Litte hack because not working on safari */
    await replaceFontAwesomeIconsWithImages(node);
    await toJpeg(node);

    canvas = await toJpeg(node, {
      style: { boxShadow: 'none' }
    });
  }

  revertPadding(node);

  saveAs(canvas, `${getFileName(options)}.jpeg`);
};

/**
 * Save html as png image
 *
 * @param {Document} node
 * @param {Object} userOptions
 */
export const saveAsPng = async (node, userOptions = {}) => {
  const options = getOptions(userOptions);
  let canvas = null;

  applyFixs(node, options.forceFixText);

  setTemporalPadding(node);

  try {
    canvas = await toPng(node, {
      style: { boxShadow: 'none' }
    });
  } catch {
    /* Litte hack because not working on safari */
    await replaceFontAwesomeIconsWithImages(node);
    await toPng(node);

    canvas = await toPng(node, {
      style: { boxShadow: 'none' }
    });
  }

  revertPadding(node);

  saveAs(canvas, `${getFileName(options)}.png`);
};

/**
 * @deprecated use saveAsPng
 * Download the DOM node to png file
 *
 * @param {Document} node
 * @param {String} nameOfPage
 * @param {Boolean} hardFixText
 */
export const downloadDOM = async (
  node,
  nameOfPage = 'Image',
  forceFixText = false
) => {
  await saveAsPng(node, { forceFixText, filename: nameOfPage });
};
