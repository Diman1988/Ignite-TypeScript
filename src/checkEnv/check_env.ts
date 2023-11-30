import { execSync } from 'child_process';
import { lt } from 'semver';
import { ColorsEnum, consoleColor } from '../colors';

export function checkGitInstalled() {
  try {
    execSync('git --version');
    consoleColor('Git is installed', ColorsEnum.GREEN);
  } catch (error) {
    consoleColor('Git is not installed', ColorsEnum.RED);
  }
}

export function checkNodeVersion() {
  consoleColor(`Node.js version: ${process.version}`, ColorsEnum.BLUE);

  if (lt(process.version, '18.0.0')) {
    consoleColor('Please update your Node.js version to 18.0.0 or higher', ColorsEnum.RED);
    process.exit(1);
  }
}

export function checkYarnInstalled() {
  try {
    execSync('yarn --version');
    consoleColor('Yarn is installed', ColorsEnum.GREEN);
  } catch (error) {
    consoleColor('Yarn is not installed', ColorsEnum.RED);
    process.exit(1);
  }
}
