import { PassgenSetupState } from '../store/slices/passgen-setup/passgen-setup.slice';
import { randomString } from './random-tools';
import {
  lowercaseLatin,
  numbers,
  separators,
  specialsSymbols,
  uppercaseLatin,
} from './symbols';

export const generatePassword = ({
  allowSymbolsSeqs: symbols,
  ...options
}: PassgenSetupState) => {
  let result: string = '';
  if (options.passType === 'simple') {
    const sample = [
      symbols.numbers ? numbers : '',
      symbols.lowerLatin ? lowercaseLatin : '',
      symbols.upperLatin ? uppercaseLatin : '',
      symbols.separators ? separators : '',
      symbols.specials ? specialsSymbols : '',
    ].join('');
    result = randomString(options.passLength, sample);
  }

  if (options.passType === 'groups') {
    const sample = [
      symbols.numbers ? numbers : '',
      symbols.lowerLatin ? lowercaseLatin : '',
      symbols.upperLatin ? uppercaseLatin : '',
    ].join('');

    result = [...new Array(options.groupsCount)]
      .map(() => randomString(options.groupLength, sample))
      .join(options.separator);
  }

  if (options.capitalize) {
    result = `${randomString(1, uppercaseLatin)}${result.slice(1)}`;
  }

  return result;
};
