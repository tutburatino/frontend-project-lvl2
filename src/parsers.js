import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import ini from 'ini';

const parsers = {
  yml: data => yaml.safeLoad(data),
  json: data => JSON.parse(data),
  yaml: data => yaml.safeLoad(data),
  ini: data => ini.parse(data),
};

export default (absolutePathToFile) => {
  const data = fs.readFileSync(absolutePathToFile, 'utf-8');
  const extension = path.extname(absolutePathToFile).slice(1);
  const parser = parsers[extension];
  return parser(data);
};
