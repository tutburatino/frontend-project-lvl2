import genDiff from '../dist/';
import fs from 'fs';

const required = fs.readFileSync('__tests__/__fixtures__/result.txt', 'utf-8');
const required2 = fs.readFileSync('__tests__/__fixtures__/result2.txt', 'utf-8');
const absolutelyFilePath1 = `${__dirname}/__tests__/__fixtures__/before.json`;
const absolutelyFilePath2 =  `${__dirname}/__tests__/__fixtures__/after.json`;


test('Compared two JSON files and in two variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const actual = genDiff(absolutelyFilePath1, absolutelyFilePath2);
  expect(actual).toBe(required);

  const actual2 = genDiff(absolutelyFilePath2, absolutelyFilePath1);
  expect(actual2).toBe(required2);
});
