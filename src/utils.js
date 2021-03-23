/* jslint browser */
/* global window */
/* global document */

import { svgAsPngUri } from 'save-svg-as-png';
import { saveAs } from 'file-saver';

const DEFAULT_OPTIONS = {
  filename: 'Image',
  forceFixText: false,
  printDate: true
};

/**
 * Set computed style in static style of svg element
 * @param {Document} el
 */
const fixColorSvg = (element) => {
  const { color } = window.getComputedStyle(element);

  element.style.color = color;
};

/**
 * Set computed style in static style of svg element
 * @param {Document} el
 */
const fixSizeSvg = (element) => {
  const styles = window.getComputedStyle(element);

  element.style.width = styles.width;
  element.style.height = styles.height;
};

/**
 * Fix all text with the class "fixed-text"
 * @param {Document} node
 */
const fixText = (node) => {
  hardFixText(node, ['.fixed-text']);
};

/**
 *
 * @param {Document} node
 * @param {Array} seek
 */
const hardFixText = (
  node,
  seek = [
    'b',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'i',
    'mark',
    'p',
    'small',
    'strong'
  ]
) => {
  const allTexts = node.querySelectorAll(seek);

  for (const text of allTexts) {
    text.style.fontFamily = window.getComputedStyle(text).fontFamily;
    text.style.fontSize = window.getComputedStyle(text).fontSize;
    text.style.fontWeight = window.getComputedStyle(text).fontWeight;
    text.style.width = window.getComputedStyle(text).width;
  }
};

/**
 *
 * Exported Functions
 *
 */

/**
 *
 * @param {Document} svgs
 */
const replaceFontAwesomeIconsWithImages = async (node) => {
  const svgs = node.querySelectorAll('svg');

  const images = [];

  for (const item of svgs) {
    const itemAttribute = item.getAttribute('data-icon');
    const cache = images.find((img) => img.dataIcon === itemAttribute);

    const imgElement = document.createElement('img');

    if (cache) {
      imgElement.src = cache.uri;
    } else {
      /* eslint-disable no-await-in-loop */

      const uri = await svgAsPngUri(item, 'icon.png');
      imgElement.src = uri;
      images.push({ dataIcon: itemAttribute, uri });

      /* eslint-enable no-await-in-loop */
    }

    imgElement.dataset.icon = itemAttribute;
    imgElement.width = item.clientWidth;
    imgElement.height = item.clientHeight;

    item.replaceWith(imgElement);
  }
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

  for (const element of svgs) {
    fixColorSvg(element);
    fixSizeSvg(element);
  }
};

/**
 * Merge options
 *
 * @param {*} userOptions
 */
const getOptions = (userOptions) => {
  return {
    ...DEFAULT_OPTIONS,
    ...userOptions
  };
};

/**
 * Get File name
 * @param {*} options
 */
const getFileName = (options) => {
  if (options.printDate) {
    const date = new Date().toDateString();

    return `${options.filename} (${date})`;
  }

  return options.filename || 'Image';
};

const removeElements = (node) => {
  const els = node.querySelectorAll(['.remove-when-downloading']);

  for (const element of els) {
    element.setAttribute(
      'original_display',
      window.getComputedStyle(element).display
    );
    element.style.display = 'none';
  }
};

const recoveryElements = (node) => {
  const els = node.querySelectorAll(['.remove-when-downloading']);

  for (const element of els) {
    element.style.display = element.getAttribute('original_display');
  }
};

/**
 *
 * @param {*} node
 */
export const filterElements = (node) => {
  return node.className !== 'hide-when-downloading';
};

/**
 *
 * @param {*} node
 * @param {*} userOptions
 * @param {*} callback
 * @param {*} extension
 */
export const scaffolding = async (
  node,
  userOptions,
  callback,
  extension = 'png'
) => {
  const options = getOptions(userOptions || {});
  let canvas = null;

  applyFixs(node, options.forceFixText);

  removeElements(node);

  try {
    canvas = await callback();
  } catch {
    /* Litte hack because not working on safari */
    await replaceFontAwesomeIconsWithImages(node);
    await callback();

    canvas = await callback();
  }

  recoveryElements(node);

  saveAs(canvas, `${getFileName(options)}.${extension}`);
};
