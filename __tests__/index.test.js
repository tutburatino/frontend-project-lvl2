import fs from 'fs';
import genDiff from '../src';


const result = fs.readFileSync('__tests__/__fixtures__/result.txt', 'utf-8');
const result2 = fs.readFileSync('__tests__/__fixtures__/result2.txt', 'utf-8');


// eslint-disable-next-line no-multi-str
test('Compared two JSON files and in two variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const json1path = `${__dirname}/__tests__/__fixtures__/before.json`;
  const json2path = `${__dirname}/__tests__/__fixtures__/after.json`;

  const actual = genDiff(json1path, json2path);
  expect(actual).toBe(result);

  const actual2 = genDiff(json2path, json1path);
  expect(actual2).toBe(result2);
});


// eslint-disable-next-line no-multi-str
test('Compared two YAML files and in two variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const yaml1path = `${__dirname}/__tests__/__fixtures__/before.yml`;
  const yaml2path = `${__dirname}/__tests__/__fixtures__/after.yml`;

  const actual = genDiff(yaml1path, yaml2path);
  expect(actual).toBe(result);

  const actual2 = genDiff(yaml2path, yaml1path);
  expect(actual2).toBe(result2);
});


// eslint-disable-next-line no-multi-str
test('Compared two INI files and in two variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const ini1path = `${__dirname}/__tests__/__fixtures__/before.ini`;
  const ini2path = `${__dirname}/__tests__/__fixtures__/after.ini`;

  const actual = genDiff(ini1path, ini2path);
  expect(actual).toBe(result);

  const actual2 = genDiff(ini2path, ini1path);
  expect(actual2).toBe(result2);
});
