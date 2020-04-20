import yaml from 'js-yaml';
import ini from 'ini';


const parsers = {
  yml: yaml.safeLoad,
  json: JSON.parse,
  yaml: yaml.safeLoad,
  ini: ini.parse,
};


export default (data, extension) => {
  const parse = parsers[extension];
  return parse(data);
};
