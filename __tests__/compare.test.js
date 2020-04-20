import compare from '../src/compare';
import before from './__fixtures__/compare/before';
import after from './__fixtures__/compare/after';
import difference from './__fixtures__/compare/difference';


test('Compare two objects: before & after', () => {
  const actual = compare(before, after);
  expect(actual).toEqual(difference);
});
