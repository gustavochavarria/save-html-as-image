/* global window */

/**
 *
 * @param {*} node
 * @param {*} opt
 * @returns
 */
const getSizes = (node, opt) => {
  if (opt.width && opt.height) {
    const { width, height } = opt;

    return { width, height };
  }

  const { width, height } = window.getComputedStyle(node);

  return {
    width: Number.parseInt(width.replace('px', ''), 10) + 4,
    height: Number.parseInt(height.replace('px', ''), 10) + 4
  };
};

/**
 *
 * @param {*} node
 * @param {*} opt
 * @param {*} format
 * @returns
 */
export const getImageOptions = (node, opt, format = 'png') => {
  const { backgroundColor, quality, pixelRatio, style } = opt;
  let currentOptions = {
    ...getSizes(node, opt),
    pixelRatio: 1
  };

  // Style
  if (style) {
    currentOptions = {
      ...currentOptions,
      style
    };
  }

  // Background
  if (backgroundColor) {
    currentOptions = {
      ...currentOptions,
      backgroundColor
    };
  }

  // Pixel Ratio
  if (pixelRatio && pixelRatio > 0) {
    currentOptions = {
      ...currentOptions,
      pixelRatio
    };
  }

  // Quality
  if (quality && format.includes('jpeg')) {
    const q = quality >= 0 && quality <= 1 ? quality : 1;

    currentOptions = {
      ...currentOptions,
      quality: q
    };
  }

  return currentOptions || {};
};
