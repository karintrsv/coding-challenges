// INPUT
// 1 array of positive integers, A
// 1 positive integer, k

// GOAL
// Divide A into k segments where the maximum sum of any segment is minimized

const arraySum = arr => arr.reduce((sum, num) => sum+num, 0)

const optimumDivisor = (arr, n) => {
  const sum = arraySum(arr); 
  const meanLimit = sum / n;    // find the average of all numbers to get a rough baseline
  const partitions = [];
  for (i = 0; i < n; ++i) {     // iterate through all items
    let accumulator = 0;        // this will be the sum of a segment
    partitions.push([]);
    while (arr.length > 0) {    
      if (accumulator + arr[0] > meanLimit) { // when the sum is bigger than the baseline, start the creation of new segment
        break;
      }
      partitions[i].push(arr[0]);             // otherwise keep pushing items into it 
      accumulator += arr.shift();
    }
  }
  return partitions;
};

console.log(optimumDivisor([1,3,4,1,5,1,2,5,3], 3))

// expected output
// [ [ 1, 3, 4 ], [ 1, 5, 1 ], [ 2, 5 ] ]