/*
 * Challenge from Impact Byte community
 *
 * INPUT
 * 1 array of numbers
 *
 * GOAL
 * Return the second largest number in the array
 *
 * example input
 * [1, 5, 0, 6]
 * expected output
 * 5
 */

getSecondLargest = arr => {
  let secondLargest,
    largest = -Infinity;

  arr.forEach(value => {
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    }
  });

  return secondLargest;
};

console.log(getSecondLargest([4, 2, 5, 1]));
