import { getPlain, getTree } from './formatters';


const formatters = {
  tree: diff => getTree(diff),
  plain: diff => getPlain(diff),
  json: diff => JSON.stringify(diff),
};

const render = (difference, format = 'tree') => formatters[format](difference);

export default render;
