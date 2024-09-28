import lodash from 'lodash';
import chalk from 'chalk';

const array = [1, 4, 1, 2, 3, 5, 3, 4, 5, 2];
const uniqueNums = lodash.uniq(array);
console.log(chalk.bgGray(uniqueNums));

console.log(chalk.blueBright("Hello, with chalk!"));

