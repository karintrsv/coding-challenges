/*
 * Challenge from LinkedIn
 *
 * INPUT
 * 1 non-empty string
 *
 * GOAL
 * Make sure there are no three same letters consecutively in the string
 *
 * example input
 * xxxtuuuuiiaaa
 * expected output
 * xxtuuiiaa
 */

const str = "uuuuxaaaxuuu";

//maximum same consecutive letter
const maxCount = 3;

function solution(str) {
  return str.split("").reduce(
    (acc, letter) => {
      //iterate through the letters while keeping in track
      //the count for same letter
      const [result, previousLetter, count] = acc;

      if (letter === previousLetter) {
        if (count < maxCount - 1) {
          return [result + letter, letter, count + 1];
        } else {
          return [result, letter, count];
        }
      } else {
        return [result + letter, letter, 1];
      }
    },
    //initial accumulator
    ["", "", 1]
  )[0];
}

console.log(solution(str));
