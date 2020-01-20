arrayInput = [1, 3, 5, 2, 3, 2, 1, 3];

group = arr =>
  Object.values(
    arr.reduce((s, n) => (s[n] ? s[n].push(n) : (s[n] = [n]), s), {})
  );

console.log(group(arrayInput));
// expected output
// [ [ 1, 1 ], [ 2, 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ]
