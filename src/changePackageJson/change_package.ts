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
    packageJson.repository = parameters.repository;
    packageJson.bugs = parameters.bugs;
    packageJson.homepage = parameters.homepage;
    packageJson.license = 'MIT';

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    consoleColor('package.json updated successfully', ColorsEnum.GREEN);
  } catch (error) {
    consoleColor(`Error updating package.json: ${error}`, ColorsEnum.RED);
    process.exit(1);
  }
}
