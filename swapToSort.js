/*
 * Challenge from nextgencoder on Instagram
 *
 * INPUT
 *  1 array of integers
 *
 * GOAL
 * Find out if the array can be put into a sorted order by
 * swapping exactly two elements.
 *
 * example input
 * [6,2,3,4,5,1]
 *
 * expected output
 * Swapped
 * [1,2,3,4,5,6]
 */

const numList = [4, 7, 2, 3];
const x = 4;

function swapToSort(arr, x) {
  if (!arr.includes(x)) return { flag: false };

  const sorted = [...arr].sort((a, b) => a - b);
  const count = new Set();

  const swappedTwice = sorted.some((value, i) => {
    if (sorted[i] !== arr[i]) count.add(value);
    if (count.size > 2) return true;
  });

  return { flag: !swappedTwice, sorted };
}

function printOutput({ flag, sorted }) {
  const swap = flag ? "Swapped" : "Not Swapped";
  console.log(`${swap} ${flag ? sorted.join(" ") : ""}`);
}

printOutput(swapToSort(numList, x));
