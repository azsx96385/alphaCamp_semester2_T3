const text = "請輸入欲轉換的數字，小數會無條件進位!";
let int = prompt(text);

//----------------------------------
toRoman(int);
function toRoman(int) {
  //檢查輸入為數字 且 在限定範圍
  let number = Math.ceil(parseInt(int));

  if (!isNaN(number) && number <= 3999 && number >= 1) {
    console.log("你輸入的是數字 且 符合範圍限制 |", number);
    //將數字拆分成 千 百 十 個 位數 -> 依序做處理 -> 重新組合輸出
    let intarray = formatArray(number);
    //--------------------------------
    // if (intarray[3] !== "0") {}
    console.log("進行處理", intarray);
    //方法一
    // romance_units = unitsToRomance(intarray);
    // romance_tens = tensToRomance(intarray);
    // romance_hundreds = hundredsToRomance(intarray);
    // romance_thousands = thousandsToRomance(intarray);
    //方法二
    romance_units = finalToRomance(intarray, "I", "V", "IX", 3);
    romance_tens = finalToRomance(intarray, "X", "L", "XC", 2);
    romance_hundreds = finalToRomance(intarray, "C", "D", "CM", 1);
    romance_thousands = finalToRomance(intarray, "M", "", "", 0);
    //   console.log(romance_units);
    //   console.log(romance_tens);
    romanceResult =
      romance_thousands + romance_hundreds + romance_tens + romance_units;
    console.log(romanceResult);
    return romanceResult;
    //--------------------------------
  } else if (isNaN(number)) {
    console.log("輸入格式錯誤!  請你輸入數字 |", number);
  } else if (!isNaN(number) && number >= 4000) {
    console.log(
      "你輸入的是數字，可是超過範圍了，請輸入小於3999數字! |",
      number
    );
  } else if (!isNaN(number) && 0 >= number) {
    console.log("你輸入的是數字，可是超過範圍了，請輸入大於0數字! |", number);
  }

  //--------
}

//-------------------------------------------------------
function formatArray(number) {
  //格式化函式-根據千，百，十，個位數填入4項目的空格
  let model = [];
  let digit = number.toString();
  //補0
  if (digit.length === 1) {
    digit = "000" + digit;
  } else if (digit.length === 2) {
    digit = "00" + digit;
  } else if (digit.length === 3) {
    digit = "0" + digit;
  }
  //array 化
  for (let i = 0; i < digit.length; i++) {
    model.push(digit[i]);
  }
  return model;
}
function strMul(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  //console.log(result);
  return result;
}
//[第一版]--------------------------------------------------------------
function unitsToRomance(intarray) {
  let romance = "";
  let onestr = "I";
  let fivestr = "V";
  let ninestr = "IX";
  number = parseInt(intarray[3]);
  //開始判斷數字
  if (number <= 3) {
    //console.log(typeof units, "I" * units);
    romance += strMul(onestr, number);
  } else if (number <= 4 || number <= 8) {
    if (number <= 4) {
      romance += onestr + fivestr;
    } else if (number === 5) {
      romance += fivestr;
    } else if (number <= 8) {
      romance += fivestr + strMul(onestr, number - 5);
    }
  } else if (number === 9) {
    romance += ninestr;
  }
  // console.log(romance);
  return romance;
}
function tensToRomance(intarray) {
  let romance = "";
  let onestr = "X";
  let fivestr = "L";
  let ninestr = "XC";
  number = parseInt(intarray[2]);
  //開始判斷數字
  if (number <= 3) {
    //console.log(typeof units, "I" * units);
    romance += strMul(onestr, number);
  } else if (number <= 4 || number <= 8) {
    if (number <= 4) {
      romance += onestr + fivestr;
    } else if (number === 5) {
      romance += fivestr;
    } else if (number <= 8) {
      romance += fivestr + strMul(onestr, number - 5);
    }
  } else if (number === 9) {
    romance += ninestr;
  }
  // console.log(romance);
  return romance;
}

function hundredsToRomance(intarray) {
  let romance = "";
  let onestr = "C";
  let fivestr = "D";
  let ninestr = "CM";
  number = parseInt(intarray[1]);
  //開始判斷數字
  if (number <= 3) {
    //console.log(typeof units, "I" * units);
    romance += strMul(onestr, number);
  } else if (number <= 4 || number <= 8) {
    if (number <= 4) {
      romance += onestr + fivestr;
    } else if (number === 5) {
      romance += fivestr;
    } else if (number <= 8) {
      romance += fivestr + strMul(onestr, number - 5);
    }
  } else if (number === 9) {
    romance += ninestr;
  }
  // console.log(romance);
  return romance;
}
function thousandsToRomance(intarray) {
  let romance = "";
  let onestr = "M";
  let fivestr = "D";
  let ninestr = "CM";
  number = parseInt(intarray[0]);
  //開始判斷數字
  if (number <= 3) {
    //console.log(typeof units, "I" * units);
    romance += strMul(onestr, number);
  } else if (number <= 4 || number <= 8) {
    if (number <= 4) {
      romance += onestr + fivestr;
    } else if (number === 5) {
      romance += fivestr;
    } else if (number <= 8) {
      romance += fivestr + strMul(onestr, number - 5);
    }
  } else if (number === 9) {
    romance += ninestr;
  }
  // console.log(romance);
  return romance;
}
//[修正-第二版]---------------------------------------------------------------
function finalToRomance(intarray, onestr, fivestr, ninestr, i) {
  let romance = "";
  number = parseInt(intarray[i]);
  //開始判斷數字
  if (number <= 3) {
    //console.log(typeof units, "I" * units);
    romance += strMul(onestr, number);
  } else if (number <= 4 || number <= 8) {
    if (number <= 4) {
      romance += onestr + fivestr;
    } else if (number === 5) {
      romance += fivestr;
    } else if (number <= 8) {
      romance += fivestr + strMul(onestr, number - 5);
    }
  } else if (number === 9) {
    romance += ninestr;
  }
  // console.log(romance);
  return romance;
}
