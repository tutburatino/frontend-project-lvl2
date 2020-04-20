import { join } from 'path';
import fs from 'fs';
import render from '../src/render';
import difference from './__fixtures__/render/difference';

const getFixturePath = filename => join(__dirname, '__fixtures__/render', filename);
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8');


test.each([
  ['format-json.json', 'json'],
  ['format-tree.txt', 'tree'],
  ['format-plain.txt', 'plain'],
])('render(%s, %s)', (file, format) => {
  const result = readFile(file);
  expect(render(difference, format)).toEqual(result);
});
