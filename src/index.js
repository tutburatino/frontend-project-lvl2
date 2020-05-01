import { extname, resolve } from 'path';
import fs from 'fs';
import parse from './parse';
import compare from './compare';
import { render } from './formatters';


export default (filePath1, filePath2, format = 'tree') => {
  const ext = extname(filePath1).slice(1);

  const path1 = resolve(process.cwd(), filePath1);
  const data1 = fs.readFileSync(path1, 'utf-8');

  const path2 = resolve(process.cwd(), filePath2);
  const data2 = fs.readFileSync(path2, 'utf-8');

  const obj1 = parse(data1, ext);
  const obj2 = parse(data2, ext);

  const difference = compare(obj1, obj2);

  return render(difference, format);
};
