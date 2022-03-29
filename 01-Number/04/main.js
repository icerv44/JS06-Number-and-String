let convertDecimal = (num) => {
  let num2 = String(num);
  return num2.substring(0, num2.lastIndexOf(".") + 3);
};

console.log(convertDecimal(10));
console.log(convertDecimal(10.5265555));
console.log(convertDecimal(5.1));
console.log(convertDecimal(3.1289));

/**
 * 
 * let convertDecimal = (num) => {
  num2 = Number(num)
  return (Math.trunc(num*100).toFixed(2)/100);
};
 */
