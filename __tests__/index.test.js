import path from 'path';
import fs from 'fs';
import genDiff from '../src';


const getFixturePath = filename => path.join(__dirname, '__fixtures__', filename);
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8');


let beforePath;
let afterPath;

beforeAll(() => {
  beforePath = `${__dirname}/__fixtures__/beforeTree.json`;
  afterPath = `${__dirname}/__fixtures__/afterTree.json`;
});


test('JSON', () => {
  const actual = genDiff(getFixturePath('before.json'), getFixturePath('after.json'));
  expect(actual).toBe(readFile('result.txt'));
});


test('YAML', () => {
  const actual = genDiff(getFixturePath('before.yml'), getFixturePath('after.yml'));
  expect(actual).toBe(readFile('result.txt'));
});


test('INI', () => {
  const actual = genDiff(getFixturePath('before.ini'), getFixturePath('after.ini'));
  expect(actual).toBe(readFile('result.txt'));
});


test('Nested JSON', () => {
  const actual = genDiff(beforePath, afterPath);
  expect(actual).toBe(readFile('result4Trees.txt'));
});


test('Plain format output', () => {
  const actual = genDiff(beforePath, afterPath, 'plain');
  expect(actual).toBe(readFile('plainFormat.txt'));
});


test('JSON format output', () => {
  const actual = genDiff(beforePath, afterPath, 'JSON');
  expect(actual).toBe(readFile('jsonFormat.json'));
});
