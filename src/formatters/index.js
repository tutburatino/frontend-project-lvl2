import getTree from './tree';
import getPlain from './plain';

const formatters = {
  tree: getTree,
  plain: getPlain,
  json: JSON.stringify,
};

export default (difference, format = 'tree') => formatters[format](difference);
