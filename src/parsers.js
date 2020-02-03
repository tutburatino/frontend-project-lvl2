import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';


const parsers = {
  yml: data => yaml.safeLoad(data),
  json: data => JSON.parse(data),
  yaml: data => yaml.safeLoad(data),
};

export default (pathToFile) => {
  const data = fs.readFileSync(pathToFile, 'utf-8');
  const extension = path.extname(pathToFile).slice(1);
  const parser = parsers[extension];
  const result = parser(data);
  return result;
};
