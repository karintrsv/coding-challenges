//max radix = 62
const range = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const convertToDecimal = (value, fromBase) =>
  String(value)
    .split("")
    .reverse()
    .reduce((sum, num, index) => {
      const decimal = range.indexOf(num) * fromBase ** index;
      return sum + decimal;
    }, 0);

const convertFromDecimal = (decimalValue, toBase) => {
  let result = "";
  while (decimalValue > 0) {
    result = range[decimalValue % toBase] + result;
    decimalValue = Math.floor(decimalValue / toBase);
  }
  return result;
};

const convertBase = (value, fromBase, toBase) => {
  let decimalValue;
  if (fromBase === 10) {
    decimalValue = value;
  } else {
    decimalValue = convertToDecimal(value, fromBase);
  }

  if (toBase === 10) return decimalValue;

  return convertFromDecimal(decimalValue, toBase);
};

console.log(convertBase("ff", 16, 10)); //output 255
