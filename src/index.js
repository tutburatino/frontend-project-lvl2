/* eslint-disable import/no-cycle */
// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import path from 'path';
import defineType from './types/defineType';
import parse from './parsers';
import formatters from './formatters';


export const genDifference = (obj1, obj2) => _.union(_.keys({ ...obj1, ...obj2 }))
  .map(key => defineType(key, obj1, obj2));

const extractObj = pathToFile => parse(pathToFile);

const toAbsolute = (pathToFile) => {
  if (path.isAbsolute(pathToFile)) {
    return pathToFile;
  }
  return path.join(process.env.PWD, pathToFile);
};

const render = (difference, format) => formatters[format](difference);

export default (path1, path2, format = 'tree') => {
  const absolutePathToFile1 = toAbsolute(path1);
  const absolutePathToFile2 = toAbsolute(path2);

  const obj1 = extractObj(absolutePathToFile1);
  const obj2 = extractObj(absolutePathToFile2);

  const difference = genDifference(obj1, obj2);
  const normalizedFormat = format.toLowerCase();

  return render(difference, normalizedFormat);
};
