/*
 * Copyright 2023 by Swiss Post, Information Technology
 */

const EMPTY_VALUES = [undefined, null, ''];

export function checkEmptyOr<T extends unknown[]>(check: (...args: T) => void) {
  return (...args: T) => {
    const value = args[0];
    if (!EMPTY_VALUES.some(v => v === value)) check(...args);
  };
}
