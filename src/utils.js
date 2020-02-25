/* jslint browser */
/* global window */
/* global document */

import { svgAsPngUri } from 'save-svg-as-png';

export const DEFAULT_OPTIONS = {
  filename: 'Image',
  forceFixText: false,
  printDate: true
};

/**
 * Set computed style in static style of svg element
 * @param {Document} el
 */
export const fixColorSvg = el => {
  const { color } = window.getComputedStyle(el);

  el.style.color = color;
};

/**
 * Set computed style in static style of svg element
 * @param {Document} el
 */
export const fixSizeSvg = el => {
  const styles = window.getComputedStyle(el);

  el.style.width = styles.width;
  el.style.height = styles.height;
};

/**
 * Fix all text with the class "fixed-text"
 * @param {Document} node
 */
export const fixText = node => {
  hardFixText(node, ['.fixed-text']);
};

/**
 *
 * @param {Document} node
 * @param {Array} seek
 */
export const hardFixText = (
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
 * @param {Document} svgs
 */
export const replaceFontAwesomeIconsWithImages = async node => {
  const svgs = node.querySelectorAll('svg');

  const images = [];

  for (const item of svgs) {
    const itemAttribute = item.getAttribute('data-icon');
    const cache = images.find(img => img.dataIcon === itemAttribute);

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
