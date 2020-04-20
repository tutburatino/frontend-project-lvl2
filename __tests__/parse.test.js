import { join } from 'path';
import fs from 'fs';
import parse from '../src/parse';
import result from './__fixtures__/parse/result';

const getFixturePath = filename => join(__dirname, '__fixtures__/parse', filename);
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8');


test.each([
  ['file.json', 'json'],
  ['file.ini', 'ini'],
  ['file.yml', 'yml'],
])('parse(%s, %s)', (path, type) => {
  const data = readFile(path);
  expect(parse(data, type)).toEqual(result);
});
