import { join } from 'path';
import fs from 'fs';
import genDiff from '../src';


const getFixturePath = filename => join(__dirname, '__fixtures__/index', filename);
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8');


test.each([
  ['yaml1.yml', 'yaml2.yml', 'result.txt', 'tree'],
  ['ini1.ini', 'ini2.ini', 'result.txt', 'tree'],
  ['json1.json', 'json2.json', 'format-tree.txt', 'tree'],
  ['json1.json', 'json2.json', 'format-plain.txt', 'plain'],
  ['json1.json', 'json2.json', 'format-json.json', 'json'],
])('genDiff(%s, %s)', (file1, file2, result, format) => {
  const path1 = getFixturePath(file1);
  const path2 = getFixturePath(file2);
  const expected = readFile(result);
  expect(genDiff(path1, path2, format)).toBe(expected);
});
