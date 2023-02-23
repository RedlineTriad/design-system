import { checkContainsOnly } from './check-contains-only';
import { checkLength } from './check-length';
import { emptyOr } from './empty-or';
import { checkOneOf } from './check-one-of';
import { checkType } from './check-type';

export const checkEmptyOrOneOf = emptyOr(checkOneOf);
export const checkEmptyOrType = emptyOr(checkType);
export const checkEmptyOrContainsOnly = emptyOr(checkContainsOnly);
export const checkEmptyOrHasLength = emptyOr(checkLength);

export * from './check-contains-only';
export * from './check-exists';
export * from './check-length';
export * from './check-one-of';
export * from './check-type';
