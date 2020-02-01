import commander from 'commander';
import genDiff from '.';

const program = new commander.Command();

program
  .version('1.0.0')
  .description('Compares two cofiguration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)));

export default args => program.parse(args);
