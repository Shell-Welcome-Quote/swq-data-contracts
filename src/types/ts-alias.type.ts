/**
 * In most cases used as a Primary Key or an other unique Identifier.
 * Can have different size 2, 4 or 8 bytes.
 * Min value: 1.
 */
export type IDInt = number;

/**
 * @example A value example
 *
 *   '2020-01-09T00:27:35.968Z'
 *
 * @example How to generate
 *
 *   new Date().toISOString()
 *
 */
export type ISODate = string;
