function repeat(string) {
  /*array of repeated characters*/
  const repeated = string.match(/(.)(?=.*\1)/g) || [];

  /*repeat any characters not included in the above array*/
  return string.replace(/(.)/g, (c) => (repeated.includes(c) ? c : c + c));
}

console.log(repeat("Hello")); //expected output: "HHeelloo"
console.log(repeat("World")); //expected output: "WWoorrlldd"
console.log(repeat("nextgencoder")); //expected output: "nexxttggenccoodderr"
console.log(repeat("Nextgencoder")); //expected output: "NNexxttggennccoodderr"
