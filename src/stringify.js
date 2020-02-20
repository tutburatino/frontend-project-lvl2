import _ from 'lodash/fp';

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const items = _.keys(value).map(
    key => `${'    '.repeat(depth)}    ${key}: ${stringify(value[key], depth + 1)}`,
  ).join('');

  return `{\n${items}\n${'    '.repeat(depth)}}`;
};

export default stringify;
