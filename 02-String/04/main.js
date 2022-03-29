let checkText = (str) => {
  let tmp = String(str).toLowerCase();
  let bool = false;

  let chkText = ["xxx", "sex", "porn"];

  for (let i of chkText) {
    if (tmp.includes(i)) {
      bool = true;
      break;
    } else {
      bool = false;
    }
  }

  return bool;
};
console.log(checkText("xyx lol xx"));
console.log(checkText("xyx SeX xx"));
console.log(checkText("xyx lol XXX"));
console.log(checkText("pOrn lol xx"));
console.log(checkText("xyx sEX xx"));
