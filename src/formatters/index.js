import getTree from './tree';
import getPlain from './plain';

const formatters = {
  tree: getTree,
  plain: getPlain,
  json: JSON.stringify,
};

const render = (difference, format = 'tree') => formatters[format](difference);

export {
  getPlain,
  getTree,
  render,
};
