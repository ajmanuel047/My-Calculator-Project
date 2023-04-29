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

let arr = [];

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

display.style.fontSize = "3.5rem";
function operator() {
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
    } else if (Number.isInteger(value) == false && arr[i + 1] == "+") {
      result = value;
    }
  }
  return result;
}

/* Keydown start */
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 48) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 0;

        arr.push(0);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(0);
        display.textContent = 0;
      } else if (clickCount === 2) {
        display.textContent += 0;
        let result = Number(arr[arr.length - 1] + "0");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 0;
        let result = Number(arr[arr.length - 1] + "0");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 0;
        let result = Number(arr[arr.length - 1] + "0");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode === 49) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 1;

        arr.push(1);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(1);
        display.textContent = 1;
      } else if (clickCount === 2) {
        display.textContent += 1;
        let result = Number(arr[arr.length - 1] + "1");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 1;
        let result = Number(arr[arr.length - 1] + "1");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 1;
        let result = Number(arr[arr.length - 1] + "1");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode == 50) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 2;

        arr.push(2);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(2);
        display.textContent = 2;
      } else if (clickCount === 2) {
        display.textContent += 2;
        let result = Number(arr[arr.length - 1] + "2");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 2;
        let result = Number(arr[arr.length - 1] + "2");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 2;
        let result = Number(arr[arr.length - 1] + "2");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode == 51) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 3;

        arr.push(3);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(3);
        display.textContent = 3;
      } else if (clickCount === 2) {
        display.textContent += 3;
        let result = Number(arr[arr.length - 1] + "3");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 3;
        let result = Number(arr[arr.length - 1] + "3");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 3;
        let result = Number(arr[arr.length - 1] + "3");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode == 52) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 4;

        arr.push(4);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(4);
        display.textContent = 4;
      } else if (clickCount === 2) {
        display.textContent += 4;
        let result = Number(arr[arr.length - 1] + "4");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 4;
        let result = Number(arr[arr.length - 1] + "4");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 4;
        let result = Number(arr[arr.length - 1] + "4");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode == 53) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 5;

        arr.push(5);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(5);
        display.textContent = 5;
      } else if (clickCount === 2) {
        display.textContent += 5;
        let result = Number(arr[arr.length - 1] + "5");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 5;
        let result = Number(arr[arr.length - 1] + "5");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 5;
        let result = Number(arr[arr.length - 1] + "5");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode == 54) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 6;

        arr.push(6);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(6);
        display.textContent = 6;
      } else if (clickCount === 2) {
        display.textContent += 6;
        let result = Number(arr[arr.length - 1] + "6");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 6;
        let result = Number(arr[arr.length - 1] + "6");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 6;
        let result = Number(arr[arr.length - 1] + "6");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode == 55) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 7;

        arr.push(7);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(7);
        display.textContent = 7;
      } else if (clickCount === 2) {
        display.textContent += 7;
        let result = Number(arr[arr.length - 1] + "7");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 7;
        let result = Number(arr[arr.length - 1] + "7");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 7;
        let result = Number(arr[arr.length - 1] + "7");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode == 56) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 8;

        arr.push(8);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(8);
        display.textContent = 8;
      } else if (clickCount === 2) {
        display.textContent += 8;
        let result = Number(arr[arr.length - 1] + "8");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 8;
        let result = Number(arr[arr.length - 1] + "8");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 8;
        let result = Number(arr[arr.length - 1] + "8");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  } else if (e.keyCode == 57) {
    if (display.textContent.length < 9) {
      if (
        display.textContent == 0 ||
        display.textContent == "+" ||
        display.textContent == "*" ||
        display.textContent == "-" ||
        display.textContent == "/"
      ) {
        display.textContent = 9;

        arr.push(9);
      }
      //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
      //        display.textContent = -3
      //        arr.push(-3)
      //     }
      else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
        arr = [];
        arr.push(9);
        display.textContent = 9;
      } else if (clickCount === 2) {
        display.textContent += 9;
        let result = Number(arr[arr.length - 1] + "9");
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (display.textContent.length > 2) {
        display.textContent += 9;
        let result = Number(arr[arr.length - 1] + "9");
        arr.pop();
        arr.push(result);
        console.log("yessss");
        clickCount = 0;
      } else {
        display.textContent += 9;
        let result = Number(arr[arr.length - 1] + "9");
        arr.pop();
        arr.push(result);
        console.log("yessss");
      }
      console.log(display.textContent);

      console.log(arr);
    } else {
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
    }
  }
});

/*keydown end */
zero.addEventListener("click", function () {
  clickCount++;
  if (display.textContent.length < 9) {
    if (arr.length == 1 && display.textContent == 0) {
      arr = [];
    }
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 0;
      arr = [];
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "0";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(0);
      display.textContent = 0;
    } else if (clickCount === 2) {
      display.textContent += 0;
      let result = Number(arr[arr.length - 1] + "0");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 0;
      let result = Number(arr[arr.length - 1] + "0");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 0;
      let result = Number(arr[arr.length - 1] + "0");
      arr.pop();
      arr.push(result);

      console.log("yessss");
    }
  } else {
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
  }

  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);
  num1 = Number(display.textContent);
  console.log(arr);
});

one.addEventListener("click", function (e) {
  clickCount++;
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 1;

      arr.push(1);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "1";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(1);
      display.textContent = 1;
    } else if (clickCount === 2) {
      display.textContent += 1;

      let result = Number(arr[arr.length - 1] + "1");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 1;
      let result = Number(arr[arr.length - 1] + "1");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 1;
      let result = Number(arr[arr.length - 1] + "1");
      arr.pop();
      arr.push(result);

      console.log("yessss");
    }
  } else {
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
  }

  console.log(`length : ${display.textContent.length}`);

  console.log(display.textContent);
  num1 = Number(display.textContent);
  console.log(arr);
});

document.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() !== "button") {
    clickCount = 0;
  }
});

two.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 2;

      arr.push(2);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "2";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(2);
      display.textContent = 2;
    } else if (clickCount === 2) {
      display.textContent += 2;
      let result = Number(arr[arr.length - 1] + "2");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 2;
      let result = Number(arr[arr.length - 1] + "2");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 2;
      let result = Number(arr[arr.length - 1] + "2");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  } else {
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
  }

  console.log(display.textContent);

  console.log(arr);
});

three.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 3;

      arr.push(3);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "3";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(3);
      display.textContent = 3;
    } else if (clickCount === 2) {
      display.textContent += 3;
      let result = Number(arr[arr.length - 1] + "3");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 3;
      let result = Number(arr[arr.length - 1] + "3");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 3;
      let result = Number(arr[arr.length - 1] + "3");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  } else {
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
  }

  console.log(display.textContent);

  console.log(arr);
});

four.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 4;

      arr.push(4);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "4";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(4);
      display.textContent = 4;
    } else if (clickCount === 2) {
      display.textContent += 4;
      let result = Number(arr[arr.length - 1] + "4");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 4;
      let result = Number(arr[arr.length - 1] + "4");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 4;
      let result = Number(arr[arr.length - 1] + "4");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  } else {
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
  }

  console.log(display.textContent);

  console.log(arr);
});

five.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 5;

      arr.push(5);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "5";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(5);
      display.textContent = 5;
    } else if (clickCount === 2) {
      display.textContent += 5;
      let result = Number(arr[arr.length - 1] + "5");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 5;
      let result = Number(arr[arr.length - 1] + "5");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 5;
      let result = Number(arr[arr.length - 1] + "5");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  } else {
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
  }

  console.log(display.textContent);

  console.log(arr);
});

six.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 6;

      arr.push(6);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "6";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(6);
      display.textContent = 6;
    } else if (clickCount === 2) {
      display.textContent += 6;
      let result = Number(arr[arr.length - 1] + "6");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 6;
      let result = Number(arr[arr.length - 1] + "6");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 6;
      let result = Number(arr[arr.length - 1] + "6");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  } else {
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
  }

  console.log(display.textContent);

  console.log(arr);
});

seven.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 7;

      arr.push(7);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "7";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(7);
      display.textContent = 7;
    } else if (clickCount === 2) {
      display.textContent += 7;
      let result = Number(arr[arr.length - 1] + "7");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 7;
      let result = Number(arr[arr.length - 1] + "7");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 7;
      let result = Number(arr[arr.length - 1] + "7");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  } else {
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
  }

  console.log(display.textContent);

  console.log(arr);
});

eight.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 8;

      arr.push(8);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "8";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(8);
      display.textContent = 8;
    } else if (clickCount === 2) {
      display.textContent += 8;
      let result = Number(arr[arr.length - 1] + "8");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 8;
      let result = Number(arr[arr.length - 1] + "8");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 8;
      let result = Number(arr[arr.length - 1] + "8");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  } else {
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
  }

  console.log(display.textContent);

  console.log(arr);
});

nine.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent == 0 ||
      display.textContent == "+" ||
      display.textContent == "*" ||
      display.textContent == "-" ||
      display.textContent == "/"
    ) {
      display.textContent = 9;

      arr.push(9);
    } else if (
      arr.length == 1 &&
      arr.toString().charAt(arr.toString().length - 1) == "."
    ) {
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString() + "9";
      arr.push(string);
      display.textContent = string;
    } else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(9);
      display.textContent = 9;
    } else if (clickCount === 2) {
      display.textContent += 9;
      let result = Number(arr[arr.length - 1] + "9");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += 9;
      let result = Number(arr[arr.length - 1] + "9");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += 9;
      let result = Number(arr[arr.length - 1] + "9");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  } else {
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
  }

  console.log(display.textContent);

  console.log(arr);
});

decimal.addEventListener("click", function () {
  if (display.textContent.length < 9) {
    if (
      display.textContent !== "+" ||
      display.textContent !== "-" ||
      display.textContent !== "/" ||
      display.textContent !== "*"
    ) {
      let result = display.textContent + ".";
      display.textContent = result;
      let index = arr.indexOf(display.textContent);
      arr.splice(index, 1, result);
      // arr.push(result)
    } else if (arr.length == 1) {
    }
    //    else if(display.textContent == '-' && arr.indexOf('-') > -1 && arr[arr.indexOf('-') - 2] == "*"){
    //        display.textContent = -3
    //        arr.push(-3)
    //     }
    else if (typeof arr[0] == "string" && arr.length == 1 && arr[0] !== "-") {
      arr = [];
      arr.push(".");
      display.textContent = ".";
    } else if (clickCount === 2) {
      display.textContent += ".";
      let result = Number(arr[arr.length - 1] + ".");
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (display.textContent.length > 2) {
      display.textContent += ".";
      let result = Number(arr[arr.length - 1] + ".");
      arr.pop();
      arr.push(result);
      console.log("yessss");
      clickCount = 0;
    } else {
      display.textContent += ".";
      let result = Number(arr[arr.length - 1] + ".");
      arr.pop();
      arr.push(result);
      console.log("yessss");
    }
  }

  console.log(display.textContent);

  console.log(arr);
});

divide.addEventListener("click", function () {
  if (
    display.textContent == "*" ||
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "/"
  ) {
    console.log("what showed");
    // let index = arr.indexOf(display.textContent);
    // arr.splice(index, 1);
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
    display.textContent == "*" ||
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "/"
  ) {
    console.log("what showed");
    // let index = arr.indexOf(display.textContent);
    // arr.splice(index, 1);
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
    display.textContent == "*" ||
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "/"
  ) {
    console.log("what showed");
    // let index = arr.indexOf(display.textContent);
    // arr.splice(index, 1);
    let index = arr.length - 1;
    console.log(index);
    arr.splice(index, 1);
    console.log(arr);
  }
  if (arr.length !== 0) {
    display.textContent = "+";
    arr.push("+");
    console.log(display.textContent);
    console.log(arr);
  } else {
    arr = [];
  }

  console.log(display.textContent);
  console.log(arr);
});

subtract.addEventListener("click", function () {
  if (
    display.textContent == "*" ||
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "/"
  ) {
    console.log("what showed");
    // let index = arr.indexOf(display.textContent);
    // arr.splice(index, 1);
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

// decimal.addEventListener("click", function () {
//   display.textContent = ".";
//   arr.push(".");
//   console.log(display.textContent);
//   console.log(arr);
// });

equal.addEventListener("click", function () {
  display.textContent = operator(arr);
  arr = [];
  arr.push(display.textContent);
  console.log(display.textContent);
  console.log(arr);
});

clearButton.addEventListener("click", function () {
  display.textContent = 0;
  arr = [];
  console.clear();
});

percentage.addEventListener("click", function () {
  // let result = arr[3] / 100
  // let value = arr.indexOf(4)
  // arr.splice(value, 1, result)
  if (arr.length !== 0) {
    let value = arr.indexOf(display.textContent);
    let result = display.textContent / 100;

    console.log(result);
    // arr.unshift(result);
    display.textContent = result;
    arr.splice(value, 1, result);
    // arr.splice(1,1)
    document.body.style.backgroundColor = "green";
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
    } 
    else if (display.textContent[0] == "-" && arr.length == 1) {
      console.log("e work?");
      let newArr = [];
      newArr.push(...arr);
      arr = [];
      let string = newArr.toString();
      arr.push(display.textContent.slice(1));
      display.textContent = display.textContent.slice(1);
    } 
     else if(display.textContent[0] == '-' && arr.length > 1 && display.textContent.length < 2){
      let slicedValues = display.textContent.slice(1)
      console.log(slicedValues)
      let displayValue = Number(slicedValues)
      console.log('checking')
      console.log(display.textContent[1])
      display.textContent = slicedValues
      let length = arr.length
      console.log(length)
      arr.splice(length - 1, 1, displayValue)
      console.log(arr)
    }
    else if(display.textContent == '0'){
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message2.style.visibility = "visible";
      }, 50);
      setTimeout(function testing() {
        // textPara.remove();
        // form.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 2000);
    }
    else if(display.textContent[0] !== '-') {
      display.textContent = "-" + display.textContent;
      arr.push(Number(display.textContent));
  
      let index = arr.length - 1;
      console.log(index);
      arr.splice(index - 1, 1);
      console.log(arr);
    }
    else if(display.textContent[0] == '-' && arr.length > 1) {
      let slicedValues = display.textContent.slice(1)
      console.log(slicedValues)
      let displayValue = Number(slicedValues)
      console.log('checking')
      console.log(display.textContent[1])
      display.textContent = slicedValues
      let length = arr.length
      console.log(length)
      arr.splice(length - 1, 1, displayValue)
      console.log(arr)
    }
  } else if(display.textContent[0] !== '-'){
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
  } else if(display.textContent[0] == '-' && display.textContent.length > 2 && arr.length == 1){
    let slicedValues = display.textContent.slice(1)
    console.log(slicedValues)
    let displayValue = Number(slicedValues)
    console.log('checking')
    console.log(display.textContent[1])
    display.textContent = slicedValues
    let length = arr.length
    console.log(length)
    arr.splice(length - 1, 1, displayValue)
    console.log(arr)
  } 
else if(display.textContent[0] == '-' && display.textContent.length > 2 && arr.length > 1){
  let slicedValues = display.textContent.slice(1)
  console.log(slicedValues)
  let displayValue = Number(slicedValues)
  console.log('checking')
  console.log(display.textContent[1])
  display.textContent = slicedValues
  let length = arr.length
  console.log(length)
  arr.splice(length - 1, 1, displayValue)
  console.log(arr)
}
});

decimal.addEventListener("click", function () {});
console.log(display.textContent.length);
/*
not done

1. i need you to reduce the code. Too many repeated codes. The 
clicks i think can be reduced to just one and the keydown should
also be reduced to only one 

2. keydown for the signs 

3. error message when you input what can't be solved

4. decimal seems to be giving me a shit load of problems

5. make the +/- functional

6. make the display for equal to not be more than 9



done
1. you working on percentage as it is not pushing to arr when it is clicked
maybe it is because i need to be connected to internet to refresh the page properly
just confirm it.(done)

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





*/
