let msg = "";

let func = (a, b) => {
  let sum = 0;
  let ca = String(a).toLowerCase();
  let cb = String(b).toLowerCase();

  for (let i = 0; i <= String(b).length; i++) {
    if (ca.length > 1) {
      if (ca === cb[i] + cb[i + (ca.length - 1)]) {
        msg += ca + " index is : " + i + "\n";
        sum += 1;
      }
    } else {
      if (ca === cb[i]) {
        msg += ca + " index is : " + i + "\n";
        sum += 1;
      }
    }
  }

  return sum;
};

console.log(
  func(
    "th",
    "Function that takes two strings Return the number of times a occurs in b"
  )
);
console.log(msg);
