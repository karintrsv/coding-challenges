/*
 * Challenge from a friend. He got it from his friend
 *
 * INPUT
 * 4x - 1. Where x is a positive integer.
 *
 * GOAL
 * Create a maze pattern with length and width of the given number.
 *
 */

const char = "O";
const generateChar = (c, n) => [...Array(n > 0 ? n : 0)].fill(c).join("");

//pola 1

const createMaze1 = (n) => {
  const oddWall = char + " " + generateChar(char, n - 2);
  const evenWall = generateChar(char, n - 2) + " " + char;
  const emptyWall = char + generateChar(" ", n - 2) + char;

  loop = (n + 1) / 4;

  while (loop > 0) {
    console.log(oddWall);
    console.log(emptyWall);
    console.log(evenWall);
    loop !== 1 && console.log(emptyWall);

    loop -= 1;
  }
};

//pola 2

const createMaze2 = (n) => {
  let lw = char + " ",
    rw = "";
  let hw = generateChar(char, n - 2);

  for (i = 0; i <= n / 4; i++) {
    let len = hw.length;
    console.log(lw + hw + rw);

    lw += char + " ";
    rw += " " + char;
    hw = hw.slice(0, len - 4);
    console.log(
      lw +
        generateChar(" ", len - 4) +
        (i === Math.floor(n / 4) ? rw.replace(` ${char} `, "") : rw)
    );
  }

  rw = rw.replace(" ", "");
  lw = lw.replace(char + " ", "");
  lw = lw.slice(0, lw.length - 1);

  for (i = 0; i <= n / 4; i++) {
    let len = hw.length;
    console.log(lw + char + hw + rw);

    lw = lw.replace(char + " ", "");
    rw = rw.replace(" " + char, "");
    hw += generateChar(char, 4);
    i < Math.floor(n / 4) &&
      console.log(lw + " " + generateChar(" ", len + 4) + rw);
  }
};

// createMaze1(15);
createMaze2(15);
