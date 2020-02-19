import _ from 'lodash/fp';

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  return `{\n    ${'  '.repeat(depth)}${_.keys(value).map(
    key => `  ${'  '.repeat(depth)}${key}: ${stringify(value[key], depth + 1)}`,
  )}\n    ${'  '.repeat(depth)}}`;
};

export default stringify;
