import inquirer from 'inquirer';
import yargs from 'yargs';
import { ColorsEnum, consoleColor } from './colors';
import { run } from './run';

yargs.command(
  'init',
  'Initialize a new package',
  () => {},
  async () => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the package name?',
        validate(input: string) {
          const isValid =
            /^(?:(?:@(?:[a-z0-9-*~][a-z0-9-*._~]*)?\/[a-z0-9-._~])|[a-z0-9-~])[a-z0-9-._~]*?$/.test(
              input,
            );
          return (
            isValid ||
            'The package name must be lowercase, cannot contain spaces, and can only include special characters like hyphens, underscores, periods, and tildes'
          );
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the package description?',
        validate(input: string) {
          const isValid = input.length <= 200;
          return isValid || 'The description should be 200 characters or less';
        },
      },
      {
        type: 'input',
        name: 'author',
        message: 'Who is the package author?',
        validate(input: string) {
          const isValid = Boolean(input);
          return isValid || 'The author name cannot be empty';
        },
      },
      {
        type: 'input',
        name: 'repository',
        message: 'What is the package repository?',
        validate(input: string) {
          const isValid = /^(ftp|http|https):\/\/[^ "]+$/.test(input);
          return isValid || 'The repository should be a valid URL';
        },
      },
      {
        type: 'input',
        name: 'bugs',
        message: 'What is the package bugs?',
        validate(input: string) {
          const isValid = /^(ftp|http|https):\/\/[^ "]+$/.test(input);
          return isValid || 'The bugs field should be a valid URL';
        },
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'What is the package homepage?',
        validate(input: string) {
          const isValid = /^(ftp|http|https):\/\/[^ "]+$/.test(input);
          return isValid || 'The homepage field should be a valid URL';
        },
      },
    ];
    const answers = await inquirer.prompt<{
      name: string;
      description: string;
      author: string;
      repository: string;
      bugs: string;
      homepage: string;
    }>(questions);

    consoleColor(`Initializing a new package with name: ${answers.name}`, ColorsEnum.BLUE);
    // Дальнейшая логика на основе ответов пользователя
    run(answers);
  },
);

yargs.parse();
