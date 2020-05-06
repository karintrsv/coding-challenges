/*
 * Challenge from Impact Byte community
 *
 * INPUT
 * 1 timestamp in 24-hour HH:MM format.
 *
 * GOAL
 * Return the angle between the hour and minute hand that is less or equal to 180 degrees
 *
 * example input
 * 03:00
 * expected output
 * 90
 */

const time = "23:12";

const hour = parseInt(time.slice(0, 2)) % 12;
const minutes = parseInt(time.slice(3, 5));

console.log(hour);
console.log(minutes);
//satu putaran jam menit itu 60 menit
//tinggal cari proporsi menit sekarang kali 360 derajat
const minuteHard = (minutes / 60) * 360;

//satu jam itu 30 derajat
//tapi tambah proporsi menit, jadi kali 30 derajat juga itu
const hourHand = hour * 30 + (minutes / 60) * 30;

//ambil selisih mereka
let angle = Math.abs(minuteHard - hourHand);

//cari sudut lancip
if (angle > 180) {
  angle = 360 - angle;
}
console.log(angle);
