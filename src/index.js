// eslint-disable-next-line lodash-fp/use-fp
import {
  has, union, keys, isObject, isEqual,
} from 'lodash';
import Aded from './types/Added';
import Modified from './types/Modified';
import Removed from './types/Removed';
// eslint-disable-next-line import/no-cycle
import Intact from './types/Intact';
import parse from './parsers';


const defineType = (key, objBefore, objAfter) => {
  const oldValue = objBefore[key];
  const value = objAfter[key];
  if (!has(objBefore, key)) {
    return new Aded(key, objAfter);
  }
  if (!has(objAfter, key)) {
    return new Removed(key, objBefore);
  }
  if (isEqual(oldValue, value) || (isObject(value) && isObject(oldValue))) {
    return new Intact(key, objBefore, objAfter);
  }
  return new Modified(key, objBefore, objAfter);
};

export const genDifference = (obj1, obj2) => union(keys({ ...obj1, ...obj2 }))
  .map(key => defineType(key, obj1, obj2));

export const renderTree = (diff, depth = 0) => {
  const items = diff.map(
    item => `${item.toString(depth)}`,
  );
  return `{\n${items.join('\n')}\n${'    '.repeat(depth)}}`;
};

export const renderPlain = (diff, parents = []) => {
  const items = diff.map(
    item => item.toPlainString(parents),
  ).filter(i => i);
  return items.join('\n');
};

const render = (difference, format = 'tree') => (format === 'plain' ? renderPlain(difference) : renderTree(difference));

const extractObj = path => parse(path);

const convertToAbsolute = path => union(process.env.PWD.split('/'), path.split('/')).join('/');

export default (path1, path2, format) => {
  const obj1 = extractObj(convertToAbsolute(path1));
  const obj2 = extractObj(convertToAbsolute(path2));

  const difference = genDifference(obj1, obj2);
  return render(difference, format);
};
