// eslint-disable-next-line lodash-fp/use-fp
import {
  has, union, keys, isObject, isEqual, isEmpty,
} from 'lodash';
import Aded from './lib/statuses/Added';
import Modified from './lib/statuses/Modified';
import Removed from './lib/statuses/Removed';
import Intact from './lib/statuses/Intact';
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
    return new Intact(key, objBefore);
  }
  return new Modified(key, objBefore, objAfter);
};

const genDifference = (obj1, obj2) => union(keys({ ...obj1, ...obj2 }))
  .map(key => defineType(key, obj1, obj2));

const render = (diff, depth = 0) => {
  const items = diff.reduce((acc, item) => (
    isEmpty(acc) ? `${item.toString(depth)}` : `${acc}\n${item.toString(depth)}`
  ), []);
  return `{\n${items}\n}`;
};

const extractObj = path => parse(path);

const convertToAbsolute = path => union(process.env.PWD.split('/'), path.split('/')).join('/');

export default (path1, path2) => {
  const obj1 = extractObj(convertToAbsolute(path1));
  const obj2 = extractObj(convertToAbsolute(path2));

  const difference = genDifference(obj1, obj2);

  return render(difference);
};
