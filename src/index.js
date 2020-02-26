/* jslint browser */

import { toPng, toJpeg } from 'html-to-image';

import { filterElements, scaffolding } from './utils';

/**
 *  Save html as Jpeg Image
 *
 * @param {*} node
 * @param {*} userOptions
 */
export const saveAsJpeg = async (node, userOptions = {}) => {
  const callback = () =>
    toJpeg(node, {
      style: { boxShadow: 'none' },
      filter: filterElements
    });

  await scaffolding(node, userOptions, callback, 'jpeg');
};

/**
 * Save html as png image
 *
 * @param {Document} node
 * @param {Object} userOptions
 */
export const saveAsPng = async (node, userOptions = {}) => {
  const callback = () =>
    toPng(node, {
      style: { boxShadow: 'none' },
      filter: filterElements
    });

  await scaffolding(node, userOptions, callback, 'png');
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
