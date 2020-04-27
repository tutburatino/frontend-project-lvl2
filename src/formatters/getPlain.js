import { isObject } from 'lodash/fp';


const renderPlain = (difference, parents = []) => {
  const normalize = elem => (isObject(elem) ? '[complex value]' : elem);

  const items = difference.map(({
    name, type, oldValue, newValue, children,
  }) => {
    if (type === 'added') {
      return `Property '${[...parents, name].join('.')}' was added with value: ${normalize(newValue)}`;
    }
    if (type === 'deleted') {
      return `Property '${[...parents, name].join('.')}' was removed`;
    }
    if (type === 'parent') {
      return `${renderPlain(children, [...parents, name])}`;
    }
    if (type === 'changed') {
      return `Property '${[...parents, name].join('.')}' was updated. From ${normalize(oldValue)} to ${normalize(newValue)}`;
    }

    return null;
  });

  return items.filter(i => i).join('\n');
};

export default renderPlain;
