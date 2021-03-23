/* jslint browser */

import { toPng, toJpeg } from 'html-to-image';

import { filterElements, scaffolding } from './utils';
import { getImageOptions } from './utils-image-options';

/**
 *  Save html as Jpeg Image
 *
 * @param {*} node
 * @param {*} userOptions
 * @param {*} imageOptions
 */
export const saveAsJpeg = async (node, userOptions = {}, imageOptions = {}) => {
  const callback = () =>
    toJpeg(node, {
      filter: filterElements,
      ...getImageOptions(node, imageOptions, 'jpeg')
    });

  await scaffolding(node, userOptions, callback, 'jpeg');
};

/**
 * Save html as png image
 *
 * @param {*} node
 * @param {*} userOptions
 * @param {*} imageOptions
 */
export const saveAsPng = async (node, userOptions = {}, imageOptions = {}) => {
  const callback = () =>
    toPng(node, {
      filter: filterElements,
      ...getImageOptions(node, imageOptions, 'png')
    });

  await scaffolding(node, userOptions, callback, 'png');
};

/**
 * @deprecated use saveAsPng
 * Will removed in version 1.6
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
