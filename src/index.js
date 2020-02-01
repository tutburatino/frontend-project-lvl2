// eslint-disable-next-line lodash-fp/use-fp
import { has, union, keys } from 'lodash';
import fs from 'fs';
import Aded from './lib/statuses/Added';
import Modified from './lib/statuses/Modified';
import Removed from './lib/statuses/Removed';
import Intact from './lib/statuses/Intact';


const defineChange = (key, objBefore, objAfter) => {
  if (!has(objBefore, key)) {
    return new Aded(key, objAfter);
  }
  if (!has(objAfter, key)) {
    return new Removed(key, objBefore);
  }
  if (objBefore[key] !== objAfter[key]) {
    return new Modified(key, objBefore, objAfter);
  }
  return new Intact(key, objBefore);
};

const genDifference = (obj1, obj2) => union(keys({ ...obj1, ...obj2 }))
  .reduce((acc, key) => (
    [...acc, defineChange(key, obj1, obj2)]
  ), [])
  .join('\n');

const extractObj = (path) => {
  const string = fs.readFileSync(path, 'utf-8');
  return JSON.parse(string);
};

const convertToAbsolute = path => union(process.env.PWD.split('/'), path.split('/')).join('/');

export default (path1, path2) => `{\n${
  genDifference(extractObj(convertToAbsolute(path1)), extractObj(convertToAbsolute(path2)))
}\n}`;
