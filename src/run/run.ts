import { checkGitInstalled, checkNodeVersion, checkYarnInstalled } from '../checkEnv';
import { changePackageJson } from '../changePackageJson';
import type { Parameters } from '../interfaces';
import { changeReadme } from '../changeReadme';
import { checkConfigIsValid } from '../checkConfigIsValid';
import { updateConfigFiles } from '../updateConfigFiles';
import { cloneTemplate } from '../cloneTemplate';
import { ColorsEnum, consoleColor } from '../colors';

export default function run(parameters: Parameters) {
  consoleColor('runned', ColorsEnum.BLUE);
  consoleColor(`parameters: ${JSON.stringify(parameters)}`, ColorsEnum.BLUE);

  const repositoryUrl = 'https://github.com/Diman1988/npm-lib-template';
  const folder = 'test_clone';

  checkNodeVersion();
  checkGitInstalled();
  checkYarnInstalled();
  cloneTemplate(repositoryUrl, folder);
  changePackageJson(parameters, folder);
  changeReadme();
  updateConfigFiles();
  checkConfigIsValid();
}
