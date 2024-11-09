import { PassgenSetupState } from '../store/slices/passgen-setup/passgen-setup.slice';
import { notNull } from './common-is';
import { randomString, shuffleString } from './random-tools';
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
  const samples = [
    symbols.numbers ? numbers : null,
    symbols.lowerLatin ? lowercaseLatin : null,
    symbols.upperLatin ? uppercaseLatin : null,
    symbols.separators && options.passType !== 'groups' ? separators : null,
    symbols.specials && options.passType !== 'groups' ? specialsSymbols : null,
  ].filter(notNull);

  const required = options.atLeastOneFromSeq
    ? samples.map(v => randomString(1, v)).join('')
    : '';

  const rawLength =
    {
      simple: options.passLength,
      groups: options.groupsCount * options.groupLength,
    }[options.passType] -
    required.length -
    (options.capitalize ? 1 : 0);

  const raw = rawLength > 0 ? randomString(rawLength, samples.join('')) : '';

  const rawRes =
    (options.capitalize ? randomString(1, uppercaseLatin) : '') +
    shuffleString(required + raw);

  switch (options.passType) {
    case 'groups':
      return [...new Array(options.groupsCount)]
        .map((_, index) =>
          rawRes.slice(index * options.groupLength, (index + 1) * options.groupLength),
        )
        .join(options.separator);
    case 'simple':
      return rawRes;
  }
};
