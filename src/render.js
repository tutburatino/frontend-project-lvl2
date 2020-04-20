import { isObject } from 'lodash/fp';
import stringify from './stringify';


const renderTree = (difference, depth = 0) => {
  const indent = '    '.repeat(depth);

  const items = difference.map(({
    name, type, value, oldValue, children,
  }) => {
    if (type === 'origin') {
      return `${indent}    ${name}: ${stringify(value, depth + 1)}`;
    }
    if (type === 'added') {
      return `${indent}  + ${name}: ${stringify(value, depth + 1)}`;
    }
    if (type === 'deleted') {
      return `${indent}  - ${name}: ${stringify(oldValue, depth + 1)}`;
    }
    if (type === 'modified') {
      return `${indent}  + ${name}: ${stringify(value, depth + 1)}\n`
           + `${indent}  - ${name}: ${stringify(oldValue, depth + 1)}`;
    }
    return `${indent}    ${name}: ${renderTree(children, depth + 1)}`;
  });

  return `{\n${items.join('\n')}\n${indent}}`;
};


const renderPlain = (difference, parents = []) => {
  const normalize = elem => (isObject(elem) ? '[complex value]' : elem);

  const items = difference.map(({
    name, type, value, oldValue, children,
  }) => {
    if (type === 'added') {
      return `Property '${[...parents, name].join('.')}' was added with value: ${normalize(value)}`;
    }
    if (type === 'deleted') {
      return `Property '${[...parents, name].join('.')}' was removed`;
    }
    if (type === 'parent') {
      return `${renderPlain(children, [...parents, name])}`;
    }
    if (type === 'modified') {
      return `Property '${[...parents, name].join('.')}' was updated. From ${normalize(oldValue)} to ${normalize(value)}`;
    }

    return null;
  });

  return items.filter(i => i).join('\n');
};


const formatters = {
  tree: diff => renderTree(diff),
  plain: diff => renderPlain(diff),
  json: diff => JSON.stringify(diff),
};

const render = (difference, format = 'tree') => formatters[format](difference);

export default render;
