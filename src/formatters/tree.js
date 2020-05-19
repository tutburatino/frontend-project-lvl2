import _ from 'lodash/fp';


const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const items = _.keys(value)
    .map(key => `${'    '.repeat(depth)}    ${key}: ${stringify(value[key], depth + 1)}`)
    .join('');

  return `{\n${items}\n${'    '.repeat(depth)}}`;
};


const renderTree = (difference, depth = 0) => {
  const indent = '    '.repeat(depth);

  const items = difference.map(({
    type,
    name,
    oldValue,
    newValue,
    children,
  }) => {
    switch (type) {
      case 'added':
        return `${indent}  + ${name}: ${stringify(newValue, depth + 1)}`;

      case 'deleted':
        return `${indent}  - ${name}: ${stringify(oldValue, depth + 1)}`;

      case 'parent':
        return `${indent}    ${name}: ${renderTree(children, depth + 1)}`;

      case 'unchanged':
        return `${indent}    ${name}: ${stringify(newValue, depth + 1)}`;

      case 'changed':
        return `${indent}  + ${name}: ${stringify(newValue, depth + 1)}\n`
             + `${indent}  - ${name}: ${stringify(oldValue, depth + 1)}`;

      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return `{\n${items.join('\n')}\n${indent}}`;
};


export default renderTree;
