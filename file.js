const zero = document.querySelector(".num0");
const one = document.querySelector(".num1");
const two = document.querySelector(".num2");
const three = document.querySelector(".num3");
const four = document.querySelector(".num4");
const five = document.querySelector(".num5");
const six = document.querySelector(".num6");
const seven = document.querySelector(".num7");
const eight = document.querySelector(".num8");
const nine = document.querySelector(".num9");
const divide = document.querySelector(".divide");
const subtract = document.querySelector(".subtract");
const addButton = document.querySelector(".addition");
const multiply = document.querySelector(".multiply");
const equal = document.querySelector(".equal");
const plusMinus = document.querySelector(".plus_minus");
const clearButton = document.querySelector(".ac");
const percentage = document.querySelector(".percentage");
const decimal = document.querySelector(".decimal");
const display = document.querySelector(".display_screen");
const buttonsContainer = document.querySelector(".buttons_container");
const time = document.querySelector(".time");
const message = document.querySelector(".message");
const message2 = document.querySelector(".message2");

let currDate = new Date();
let hoursMin = currDate.getHours() + ":" + currDate.getMinutes();
time.textContent = hoursMin;

let clickCount = 0;

// let addition = () => {
//   return "+";
// };

// let subtraction = (num2, num1) => {
//   return num2 - num1;
// };

// let multiplication = (num1, num2) => {
//   return num1 * num2;
// };

// let division = (num1, num2) => {
//   return num2 / num1;
// };

/* Keydown start for number buttons*/
document.addEventListener("keydown", function (e) {
  if (e.key == "0") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 0;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 0;
        let result = Number(arr[arr.length - 1] + "0");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 0;
        arr.push(0);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 0;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "1") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 1;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 1;
        let result = Number(arr[arr.length - 1] + "1");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 1;
        arr.push(1);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 1;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "2") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 2;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 2;
        let result = Number(arr[arr.length - 1] + "2");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 2;
        arr.push(2);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 2;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "3") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 3;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 3;
        let result = Number(arr[arr.length - 1] + "3");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 3;
        arr.push(3);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 3;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "4") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 4;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 4;
        let result = Number(arr[arr.length - 1] + "4");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 4;
        arr.push(4);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 4;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "5") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 5;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 5;
        let result = Number(arr[arr.length - 1] + "5");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 5;
        arr.push(5);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 5;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "6") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 6;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 6;
        let result = Number(arr[arr.length - 1] + "6");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 6;
        arr.push(6);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 6;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "7") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 7;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 7;
        let result = Number(arr[arr.length - 1] + "7");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 7;
        arr.push(7);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 7;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "8") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 8;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 8;
        let result = Number(arr[arr.length - 1] + "8");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 8;
        arr.push(8);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 8;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  } else if (e.key == "9") {
    if (display.textContent.length < 9) {
      if (display.textContent == "0." && clickCount == 0) {
        display.textContent += 9;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
        console.log("normal");
      } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
        display.textContent += 9;
        let result = Number(arr[arr.length - 1] + "9");
        arr.pop();
        arr.push(result);
        clickCount = 0;
        console.log("if 1");
      } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
        display.textContent = 9;
        arr.push(9);
        console.log("if 2");
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 9;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        console.log("refresh");
      }
    } else {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 2000);
    }
  }
});

/*keydown end for number buttons*/

/* keydown start for sign buttons*/
document.addEventListener("keydown", function (e) {
  if (e.key === "+") {
    if (arr.length !== 0) {
      display.textContent = "+";
      arr.push("+");
      clickCount = 0;
      console.log(display.textContent);
      console.log(arr);
    }

    console.log(display.textContent);
    console.log(arr);
  } else if (e.key === "-") {
    if (arr.length !== 0) {
      display.textContent = "-";
      arr.push("-");
      console.log(display.textContent);
      console.log(arr);
    } else {
      arr = [];
    }

    console.log(display.textContent);
    console.log(arr);
  } else if (e.key === "*") {
    if (arr.length !== 0) {
      display.textContent = "*";
      arr.push("*");
      console.log(display.textContent);
      console.log(arr);
    } else {
      arr = [];
    }

    console.log(display.textContent);
    console.log(arr);
  } else if (e.key === "/") {
    if (arr.length !== 0) {
      display.textContent = "/";
      arr.push("/");
      console.log(display.textContent);
      console.log(arr);
    } else {
      arr = [];
    }

    console.log(display.textContent);
    console.log(arr);
  } else if (e.key === "=" || e.key === "Enter") {
    result = operator(arr);
    if (!arr.length == 0) {
      console.log(result.toFixed(1));
      if (result.toString().length > 9) {
        display.textContent = result.toFixed(2);
        arr = [];
        arr.push(display.textContent);
        console.log("work");
        clickCount++;
      } else if (
        arr[arr.length - 1] == "+" ||
        arr[arr.length - 1] == "-" ||
        arr[arr.length - 1] == "/" ||
        arr[arr.length - 1] == "*"
      ) {
        setTimeout(function testing() {
          message2.style.visibility = "visible";
        }, 50);
        setTimeout(function testing() {
          message2.style.visibility = "hidden";
        }, 2000);
      } else {
        display.textContent = result;
        arr = [];
        arr.push(display.textContent);

        clickCount++;
      }
    }
    console.log(display.textContent);
    console.log(arr);
    console.log(`clickCount: ${clickCount}`);
  } else if (e.key === "Escape") {
    display.textContent = 0;
    arr = [];
    console.clear();
  } else if (e.key === "%") {
    if (arr.length !== 0) {
      let value = arr.indexOf(display.textContent);
      let result = display.textContent / 100;
      console.log(result);
      display.textContent = result;
      arr.splice(value, 1, result);
    } else {
      arr = [];
    }
  }
});
/* keydown end for sign buttons*/
zero.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 0;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      count = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 0;
      let result = Number(arr[arr.length - 1] + "0");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 0;
      arr.push(0);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 0;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

one.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    //   if(typeof arr[0] == 'string'){
    //     display.textContent = 1
    //     console.log('e work')
    //   }
    // else
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 1;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 1;
      let result = Number(arr[arr.length - 1] + "1");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 1;
      arr.push(1);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 1;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

two.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 2;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 2;
      let result = Number(arr[arr.length - 1] + "2");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 2;
      arr.push(2);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 2;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

three.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 3;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 3;
      let result = Number(arr[arr.length - 1] + "3");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 3;
      arr.push(3);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 3;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

four.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 4;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 4;
      let result = Number(arr[arr.length - 1] + "4");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 4;
      arr.push(4);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 4;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

five.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 5;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 5;
      let result = Number(arr[arr.length - 1] + "5");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 5;
      arr.push(5);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 5;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

six.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 6;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 6;
      let result = Number(arr[arr.length - 1] + "6");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 6;
      arr.push(6);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 6;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

seven.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 7;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 7;
      let result = Number(arr[arr.length - 1] + "7");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 7;
      arr.push(7);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 7;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

eight.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 8;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 8;
      let result = Number(arr[arr.length - 1] + "8");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 8;
      arr.push(8);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 8;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

nine.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (display.textContent == "0." && clickCount == 0) {
      display.textContent += 9;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
      console.log("normal");
    } else if (/[1-9]/.test(display.textContent) && clickCount == 0) {
      display.textContent += 9;
      let result = Number(arr[arr.length - 1] + "9");
      arr.pop();
      arr.push(result);
      clickCount = 0;
      console.log("if 1");
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount == 0) {
      display.textContent = 9;
      arr.push(9);
      console.log("if 2");
      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 9;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
      console.log("refresh");
    }
  } else {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
      message2.style.visibility = "hidden";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  }
  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);

  console.log(arr);
});

decimal.addEventListener("click", function () {
  if (!display.textContent.includes(".")) {
    if (/[0-9]/.test(display.textContent)) {
      display.textContent += ".";
      arr.splice(arr.length - 1, 1);
      arr.push(display.textContent);
      console.log("decimal");
      clickCount = 0;
      // let length = arr.length
      console.log(arr);
    }
  }

  console.log(display.textContent);

  console.log(arr);
});

// decimal.addEventListener("click", function () {
//   display.textContent = ".";
//   arr.push(".");
//   console.log(display.textContent);
//   console.log(arr);
// });

percentage.addEventListener("click", function () {
  // let result = arr[3] / 100
  // let value = arr.indexOf(4)
  // arr.splice(value, 1, result)
  if (arr.length !== 0) {
    let value = arr.indexOf(display.textContent);
    let result = display.textContent / 100;
    console.log(result);
    display.textContent = result;
    arr.splice(value, 1, result);
  } else {
    arr = [];
  }
});

plusMinus.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == "*" ||
      display.textContent == "+" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
    } else if (display.textContent[0] == "-" && arr.length == 1) {
      console.log("e work?");
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString();
      arr.push(display.textContent.slice(1));
      display.textContent = display.textContent.slice(1);
    } else if (
      display.textContent[0] == "-" &&
      arr.length > 1 &&
      display.textContent.length < 2
    ) {
      let slicedValues = display.textContent.slice(1);
      console.log(slicedValues);
      let displayValue = Number(slicedValues);
      console.log("checking");
      console.log(display.textContent[1]);
      display.textContent = slicedValues;
      let length = arr.length;
      console.log(length);
      arr.splice(length - 1, 1, displayValue);
      console.log(arr);
    } else if (display.textContent == "0") {
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message2.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 2000);
    } else if (display.textContent[0] !== "-") {
      display.textContent = "-" + display.textContent;
      arr.push(Number(display.textContent));
      let index = arr.length - 1;
      console.log(index);
      arr.splice(index - 1, 1);
      console.log(arr);
    } else if (display.textContent[0] == "-" && arr.length > 1) {
      let slicedValues = display.textContent.slice(1);
      console.log(slicedValues);
      let displayValue = Number(slicedValues);
      console.log("checking");
      console.log(display.textContent[1]);
      display.textContent = slicedValues;
      let length = arr.length;
      console.log(length);
      arr.splice(length - 1, 1, displayValue);
      console.log(arr);
    }
  } else if (display.textContent[0] !== "-") {
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "visible";
    }, 50);
    setTimeout(function testing() {
      // textPara.remove();
      // form.style.visibility = "visible";
      message.style.visibility = "hidden";
    }, 2000);
  } else if (
    display.textContent[0] == "-" &&
    display.textContent.length > 2 &&
    arr.length == 1
  ) {
    let slicedValues = display.textContent.slice(1);
    console.log(slicedValues);
    let displayValue = Number(slicedValues);
    console.log("checking");
    console.log(display.textContent[1]);
    display.textContent = slicedValues;
    let length = arr.length;
    console.log(length);
    arr.splice(length - 1, 1, displayValue);
    console.log(arr);
  } else if (
    display.textContent[0] == "-" &&
    display.textContent.length > 2 &&
    arr.length > 1
  ) {
    let slicedValues = display.textContent.slice(1);
    console.log(slicedValues);
    let displayValue = Number(slicedValues);
    console.log("checking");
    console.log(display.textContent[1]);
    display.textContent = slicedValues;
    let length = arr.length;
    console.log(length);
    arr.splice(length - 1, 1, displayValue);
    console.log(arr);
  }
});

let arr = [];
let array = [];

function operator(arr) {
  let result = Number(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    let value = Number(arr[i]);
    if (arr[i] == "+") {
      result += arr[i + 1];
    } else if (arr[i] == "-") {
      result -= arr[i + 1];
    } else if (arr[i] == "*") {
      result *= arr[i + 1];
    } else if (arr[i] == "/") {
      result /= arr[i + 1];
    }
  }
  return result;
}

divide.addEventListener("click", function () {
  if (
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "/" ||
    display.textContent == "*"
  ) {
    let index = arr.length - 1;
    console.log(index);
    arr.splice(index, 1);
    console.log(arr);
  }
  if (arr.length !== 0) {
    display.textContent = "/";
    arr.push("/");
    console.log(display.textContent);
    console.log(arr);
  } else {
    arr = [];
  }

  console.log(display.textContent);
  console.log(arr);
});

multiply.addEventListener("click", function () {
  if (
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "/" ||
    display.textContent == "*"
  ) {
    let index = arr.length - 1;
    console.log(index);
    arr.splice(index, 1);
    console.log(arr);
  }
  if (arr.length !== 0) {
    display.textContent = "*";
    arr.push("*");
    console.log(display.textContent);
    console.log(arr);
  } else {
    arr = [];
  }

  console.log(display.textContent);
  console.log(arr);
});

addButton.addEventListener("click", function () {
  if (
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "/" ||
    display.textContent == "*"
  ) {
    let index = arr.length - 1;
    console.log(index);
    arr.splice(index, 1);
    console.log(arr);
  }
  if (arr.length !== 0) {
    display.textContent = "+";
    arr.push("+");
    clickCount = 0;
    console.log(display.textContent);
    console.log(arr);
  }

  console.log(display.textContent);
  console.log(arr);
});

subtract.addEventListener("click", function () {
  if (
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "/" ||
    display.textContent == "*"
  ) {
    let index = arr.length - 1;
    console.log(index);
    arr.splice(index, 1);
    console.log(arr);
  }
  if (arr.length !== 0) {
    display.textContent = "-";
    arr.push("-");
    console.log(display.textContent);
    console.log(arr);
  } else {
    arr = [];
  }

  console.log(display.textContent);
  console.log(arr);
});

equal.addEventListener("click", function () {
  let result = operator(arr);
  if (!arr.length == 0) {
    console.log(result.toFixed(1));
    if (result.toString().length > 9) {
      display.textContent = result.toFixed(2);
      arr = [];
      arr.push(display.textContent);
      console.log("work");
      clickCount++;
    } else if (
      arr[arr.length - 1] == "+" ||
      arr[arr.length - 1] == "-" ||
      arr[arr.length - 1] == "/" ||
      arr[arr.length - 1] == "*"
    ) {
      setTimeout(function testing() {
        message2.style.visibility = "visible";
      }, 50);
      setTimeout(function testing() {
        message2.style.visibility = "hidden";
      }, 2000);
    } else {
      display.textContent = result;
      arr = [];
      arr.push(display.textContent);

      clickCount++;
    }
  }
  console.log(display.textContent);
  console.log(arr);
  console.log(`clickCount: ${clickCount}`);
});

clearButton.addEventListener("click", function () {
  display.textContent = 0;
  arr = [];
  array = [];
  clickCount = 0;
  console.clear();
  console.log("e clear?");
  console.log(arr);
});

// decimal.addEventListener("click", function () {});
console.log(display.textContent.length);
/*
not done

1. i need you to reduce the code. Too many repeated codes. The 
clicks i think can be reduced to just one and the keydown should
also be reduced to only one. This code can be alot smaller than this
You need to reduce the code as much as possible. 

2. decimal seems to be giving me a shit load of problems
One of the issues i am having with decimals is that clicking
decimal first is just refusing to work (fixed)
2 + 2.3 works 
2.3 + 2 works
this does not work 3 + 4 + 2.3 * 3.4 + 4(fixed)
+. fix that so it doesn't do that for all the symbols(fixed)
fix this 1.1.1.142 (fixed)
fix this 1 + 0.2(fixed)
1.1 and then 1 going to 1 instead of 1.11(copy and paste to the other numbers)
3. round up 0.011000000000000001 got this by doing percentage of a
fraction in this case is did 1.1%
0.1 not working(fixed)
clicking point first and then clicking a number doesn't work(fixed)
after making everything work here you copy and paste for all buttons
and all keyboard keys

4. empty equal to giving NaN(fixed)
5. 1 + equal to gives NaN

done
1. you working on percentage as it is not pushing to arr when it is clicked
maybe it is because i need to be connected to internet to refresh the page properly
just confirm it.(done)
a. Each of the numbers have their own keys. I think we can use this
to reduce the code in terms of accessing the keys through the keyboard



2. Display screen must not be more than 9 use display.textContent.length
make the number buttons clickable through the keyboard(
  fix this using if(display.textContent < 9){//the number
  code goes here} done
)

3. number after equal to is pressed concatenates. fix this (done)

4. pressing 0 and then a number followed by number operator 
gives just the number before the operator. 
(possible thing to try. if the length is 1 and the display 
  is 0, empty the arr)
e.g ['0', '1', '-', '2'] gives -2 (fixed)

5. this plus too dey give me wahala. Now 2 + 3 = 5 + 2 is giving 
me 52 instead of 7(fixed by doing this let result = Number(arr[0]);)

6. when you click an operator more than ones it can't be used and 
therefore displays NaN. Fix this

7. make sure a sign can be clicked only ones

8. percentage block code just doesn't seem to be pushing or splicing
ask gpt for the reason
(seems to already be working. When clicked it is shown in the 
  array when something else is clicked)

9. make the +/- functional

10. keydown for the signs 
11. make the display for equal to not be more than 9

12. error message when you input what can't be solved


currently figuring out + / -
- is working but removing the - is partially working
below is the code i last typed
 else if(display.textContent[0] == "-" && arr.length == 1){
    console.log('e work?')
    let newArr = [];
    newArr.push(...arr);
    arr = [];
    let string = newArr.toString();
    arr.push(string[1]);
    display.textContent = string[1]
  } 
  walks for just when the lenght of arr is 1.
  Below doesn't work
  9 + -2 gives [9, +, NAN]





9 / 3 * *** 2 works fine


currently working on +. before going to 0.1



reduce the code further. for the e.keys signs


working on 1 + 1 = 2 1 should be 1 not 21
*/
