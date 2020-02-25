export const renderTree = (diff, depth = 0) => `{\n${
  diff.map(item => item.toString(depth))
    .join('\n')
}\n${'    '.repeat(depth)}}`;

export const renderPlain = (diff, parents = []) => diff
  .map(item => item.toPlainString(parents))
  .filter(i => i !== 'Intact')
  .join('\n');

export default {
  tree: diff => renderTree(diff),
  plain: diff => renderPlain(diff),
  json: diff => JSON.stringify(diff),
};
