/**
 *
 * @param {*} opt
 * @param {*} format
 * @returns
 */
export const getImageOptions = (opt, format = 'png') => {
  const { backgroundColor, quality, width, height, pixelRatio, style } = opt;
  let currentOptions = {};

  // Style
  if (style) {
    currentOptions = {
      ...currentOptions,
      style,
    };
  }

  // Background
  if (backgroundColor) {
    currentOptions = {
      ...currentOptions,
      backgroundColor,
    };
  }

  // Width and height
  if (width && height) {
    currentOptions = {
      ...currentOptions,
      width,
      height,
    };
  }

  // Pixel Ratio
  if (pixelRatio && pixelRatio > 1) {
    currentOptions = {
      ...currentOptions,
      pixelRatio,
    };
  }

  // Quality
  if (quality && format.includes('jpeg')) {
    const q = quality >= 0 && quality <= 1 ? quality : 1;

    currentOptions = {
      ...currentOptions,
      quality: q,
    };
  }

  return currentOptions || {};
};
