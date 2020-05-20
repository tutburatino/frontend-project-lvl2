import commander from 'commander';
import genDiff from '.';

const program = new commander.Command();

program
  .version('1.0.0')
  .description('Compares two cofiguration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format', 'tree')
  .action((firstConfig, secondConfig, cmdObj) => {
    console.log(genDiff(firstConfig, secondConfig, cmdObj.format));
  });

export default (args) => program.parse(args);
