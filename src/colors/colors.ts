// eslint-disable-next-line no-shadow
export enum ColorsEnum {
  RED = 'red',
  GREEN = 'green',
  YELLOW = 'yellow',
  BLUE = 'blue',
}

const colors = {
  red: (str: string) => `\x1b[31m${str}\x1b[0m`,
  green: (str: string) => `\x1b[32m${str}\x1b[0m`,
  yellow: (str: string) => `\x1b[33m${str}\x1b[0m`,
  blue: (str: string) => `\x1b[34m${str}\x1b[0m`,
};

function addSeparator(str: string, length = str.length) {
  const separator = '-'.repeat(length);

  return `${separator}\n${str}\n${separator}`;
}

export function consoleColor(str: string, color: ColorsEnum) {
  const colorize = colors[color] || ((sourceStr) => sourceStr);

  return console.log(colorize(addSeparator(str)));
}
