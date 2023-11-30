import fs from 'fs';
import { Parameters } from '@src/interfaces';
import { ColorsEnum, consoleColor } from '../colors';

export default function changePackageJson(parameters: Parameters, folder: string) {
  consoleColor('Add parameters to package.json', ColorsEnum.BLUE);

  const packageJsonPath = `${folder}/package.json`;

  try {
    const packageJsonData = fs.readFileSync(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageJsonData);

    // Modify the package.json keys here
    packageJson.name = parameters.name;
    packageJson.description = parameters.description;
    packageJson.author = parameters.author;

    if (parameters.repository) {
      packageJson.repository = parameters.repository;
    } else {
      delete packageJson.repository;
    }

    if (parameters.bugs.length > 0) {
      packageJson.bugs = parameters.bugs;
    } else {
      delete packageJson.bugs;
    }

    if (parameters.homepage.length > 0) {
      packageJson.homepage = parameters.homepage;
    } else {
      delete packageJson.homepage;
    }

    packageJson.license = 'MIT';

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    consoleColor('package.json updated successfully', ColorsEnum.GREEN);
  } catch (error) {
    consoleColor(`Error updating package.json: ${error}`, ColorsEnum.RED);
    process.exit(1);
  }
}
