/*
 * Challenge from Impact Byte community
 *
 * INPUT
 * None
 *
 * GOAL
 * Return all instances where the hour and minute hand of an analog clock
 * overlap each other.
 *
 * example input
 * 03:00
 * expected output
 * 90
 */

function getAngle({ hour, minute, second, miliSecond }) {
  const minuteHand =
    minute * 60000 + (second * 10000) / 10 + (miliSecond * 10000) / 10000;

  const hourHand =
    hour * 300000 +
    (minute * 10000) / 2 +
    (second * 10000) / 120 +
    (miliSecond * 10000) / 120000;

  let angle = Math.abs(minuteHand - hourHand);

  //   if (angle < 0.01) console.log(angle, hour, minute, second, miliSecond);
  angle /= 10000;
  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}

for (let hour = 0; hour < 12; ++hour) {
  for (let minute = 0; minute < 60; ++minute) {
    for (let second = 0; second < 60; ++second) {
      for (let miliSecond = 0; miliSecond < 1000; miliSecond += 1) {
        const angle = getAngle({ hour, minute, second, miliSecond });
        if (angle < 0.00001) {
          console.log(
            `${angle.toFixed(
              6
            )} derajat pada jam ${hour}:${minute}:${second}:${miliSecond}`
          );
        }
      }
    }
  }
}
