import stringify from '../stringify';


const renderTree = (difference, depth = 0) => {
  const indent = '    '.repeat(depth);

  const items = difference.map(({
    name, type, value, oldValue, children,
  }) => {
    if (type === 'unchanged') {
      return `${indent}    ${name}: ${stringify(value, depth + 1)}`;
    }
    if (type === 'added') {
      return `${indent}  + ${name}: ${stringify(value, depth + 1)}`;
    }
    if (type === 'deleted') {
      return `${indent}  - ${name}: ${stringify(oldValue, depth + 1)}`;
    }
    if (type === 'changed') {
      return `${indent}  + ${name}: ${stringify(value, depth + 1)}\n`
           + `${indent}  - ${name}: ${stringify(oldValue, depth + 1)}`;
    }
    return `${indent}    ${name}: ${renderTree(children, depth + 1)}`;
  });

  return `{\n${items.join('\n')}\n${indent}}`;
};

export default renderTree;
