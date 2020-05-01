import getTree from './getTree';
import getPlain from './getPlain';

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
