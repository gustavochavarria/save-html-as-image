import { toPng, toJpeg } from 'html-to-image';
import { scaffolding } from './utils';

/**
 *  Save html as Jpeg Image
 *
 * @param {*} node
 * @param {*} userOptions
 */
export const saveAsJpeg = async (node, userOptions = {}) => {
  const callback = async () => {
    await toJpeg(node, {
      style: { boxShadow: 'none' }
    });
  };

  scaffolding(node, userOptions, callback);
};

/**
 * Save html as png image
 *
 * @param {Document} node
 * @param {Object} userOptions
 */
export const saveAsPng = async (node, userOptions = {}) => {
  const callback = async () => {
    await toPng(node, {
      style: { boxShadow: 'none' }
    });
  };

  scaffolding(node, userOptions, callback);
};
