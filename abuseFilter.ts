/**
 * @file abuseFilter.ts
 * @description Provides functions to detect abusive or inappropriate language in user input.
 *              Uses a precompiled list of English profanity words from the `naughty-words` package.
 *
 * @module abuseFilter
 * @author
 * @license MIT
 */

import words from "naughty-words/en.json";

const abusiveWords = new Set(words.map(w => w.toLowerCase()));

/**
 * Checks whether the input string contains any abusive or blacklisted words.
 *
 * @param {string} input - The user input text to evaluate.
 * @returns {boolean} - Returns true if abusive language is found; otherwise, false.
 */
export function isAbusive(input: string): boolean {
  const lowered = input.toLowerCase();
  for (const word of abusiveWords) {
    if (lowered.includes(word)) return true;
  }
  return false;
}
