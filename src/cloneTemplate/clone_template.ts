import { execSync } from 'child_process';
import { ColorsEnum, consoleColor } from '../colors';

export default function cloneTemplate(url: string, folder: string) {
  consoleColor(`Cloning repository ${url} to ${folder}...`, ColorsEnum.BLUE);

  try {
    execSync(
      `git clone --depth=1 --branch=main ${url} ${folder}/
    rm -rf ${folder}/.git`,
      { stdio: 'inherit' },
    );
    consoleColor(`Repository cloned successfully to ${folder}`, ColorsEnum.GREEN);
  } catch (error) {
    consoleColor(`${error}`, ColorsEnum.RED);
  }
}
