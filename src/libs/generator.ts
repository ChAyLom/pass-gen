import { PassgenSetupState } from '../store/slices/passgen-setup.slice';
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
  if (options.passType === 'simple') {
    const sample = [
      symbols.numbers ? numbers : '',
      symbols.lowerLatin ? lowercaseLatin : '',
      symbols.upperLatin ? uppercaseLatin : '',
      symbols.separators ? separators : '',
      symbols.specials ? specialsSymbols : '',
    ].join('');
    return randomString(options.passLength, sample);
  }
  if (options.passType === 'groups') {
    const sample = [
      symbols.numbers ? numbers : '',
      symbols.lowerLatin ? lowercaseLatin : '',
      symbols.upperLatin ? uppercaseLatin : '',
    ].join('');

    return [...new Array(options.groupsCount)]
      .map(() => randomString(options.groupLength, sample))
      .join(options.separator);
  }
  return '' as never;
};
