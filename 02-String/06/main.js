let extractCurrencyValue = (str, num) => {
  let chg = Number(str.substring(1)) * num;
  console.log("THB" + chg);
};

extractCurrencyValue("$120", 30);
