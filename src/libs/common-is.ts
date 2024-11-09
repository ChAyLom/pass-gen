export const notFalsey = <T>(value: T): value is Exclude<T, null | undefined | 0 | ''> =>
  !!value;

export const notUndefined = <T>(value: T): value is Exclude<T, undefined> =>
  value !== undefined;

export const notNull = <T>(value: T): value is Exclude<T, null> => value !== null;

export const notNullOrUdefined = <T>(value: T) => notUndefined(value) && notNull(value);
