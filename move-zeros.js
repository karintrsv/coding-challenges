/*
 * Challenge from nextgencoders on Instagram
 *
 * INPUT
 * 1 array of positive integers
 *
 * GOAL
 * Move all zero(s) to the end of the array without changing the order of the rest of the arrray
 *
 * example input
 * [1, 3, 6, 0, 5, 1, 6, 0, 9, 0, 0, 2]
 * expected output
 * [1, 3, 6, 5, 1, 6, 9, 2, 0, 0, 0, 0]
 */

const moveZeros = arr => arr.sort((a, b) => (b === 0 ? -1 : 0));

