import { checkGitInstalled, checkNodeVersion, checkYarnInstalled } from '../checkEnv';
import { changePackageJson } from '../changePackageJson';
import type { Parameters } from '../interfaces';
import { changeReadme } from '../changeReadme';
import { checkConfigIsValid } from '../checkConfigIsValid';
import { updateConfigFiles } from '../updateConfigFiles';
import { cloneTemplate } from '../cloneTemplate';

export default function run(parameters: Parameters) {
  const repositoryUrl = 'https://github.com/Diman1988/npm-lib-template';
  const folder = 'test_clone'; // TODO: Should be .

  checkNodeVersion();
  checkGitInstalled();
  checkYarnInstalled();
  cloneTemplate(repositoryUrl, folder);
  changePackageJson(parameters, folder);
  changeReadme();
  updateConfigFiles();
  checkConfigIsValid();
}
