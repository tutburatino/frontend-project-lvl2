import { isObject } from 'lodash/fp';


const renderPlain = (difference, parents = []) => {
  const normalize = elem => (isObject(elem) ? '[complex value]' : elem);

  const items = difference.map(({
    name, type, oldValue, newValue, children,
  }) => {
    switch (type) {
      case 'added':
        return `Property '${[...parents, name].join('.')}' was added with value: ${normalize(newValue)}`;

      case 'deleted':
        return `Property '${[...parents, name].join('.')}' was removed`;

      case 'parent':
        return `${renderPlain(children, [...parents, name])}`;

      case 'changed':
        return `Property '${[...parents, name].join('.')}' was updated. From ${normalize(oldValue)} to ${normalize(newValue)}`;

      case 'unchanged':
        return false;

      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return items.filter(i => i).join('\n');
};

export default renderPlain;
