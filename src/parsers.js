import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import ini from 'ini';

const parsers = {
  yml: yaml.safeLoad,
  json: JSON.parse,
  yaml: yaml.safeLoad,
  ini: ini.parse,
};

export default (absolutePathToFile) => {
  const data = fs.readFileSync(absolutePathToFile, 'utf-8');
  const extension = path.extname(absolutePathToFile).slice(1);
  const parser = parsers[extension];
  return parser(data);
};
