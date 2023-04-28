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
    if(display.textContent.length < 9){
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
    }
   
  } else if (e.keyCode === 49) {
    if(display.textContent.length < 9){
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
    }
   
  } else if (e.keyCode == 50) {
    if(display.textContent.length < 9){
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
    }
    
  } else if (e.keyCode == 51) {
    if(display.textContent.length < 9){
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
    }
   
  } else if (e.keyCode == 52) {
    if(display.textContent.length < 9){
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
    }
   
  } else if (e.keyCode == 53) {
    if(display.textContent.length < 9){
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
    }
    
  } else if (e.keyCode == 54) {
    if(display.textContent.length < 9){
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
    }
    
  } else if (e.keyCode == 55) {
    if(display.textContent.length < 9){
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
    }
   
  } else if (e.keyCode == 56) {
    if(display.textContent.length < 9){
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
    }
   
  } else if (e.keyCode == 57) {
    if(display.textContent.length < 9){
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
  display.textContent = "/";
  arr.push("/");
  console.log(display.textContent);
  console.log(arr);
});

multiply.addEventListener("click", function () {
  display.textContent = "*";
  arr.push("*");
  console.log(display.textContent);
  console.log(arr);
});

addButton.addEventListener("click", function () {
  display.textContent = "+";
  arr.push("+");
});

subtract.addEventListener("click", function () {
  display.textContent = "-";
  arr.push("-");
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
  let value = arr.indexOf(display.textContent);
  let result = display.textContent / 100;

  arr.splice(value, 1, result);
  // arr.unshift(result);
  display.textContent = result;
  // arr.splice(1,1)
});

plusMinus.addEventListener("click", function () {});

decimal.addEventListener("click", function () {});
console.log(display.textContent.length);
/*
you working on percentage as it is not pushing to arr when it is clicked
maybe it is because i need to be connected to internet to refresh the page properly
just confirm it.(done)

Display screen must not be more than 9 use display.textContent.length
make the number buttons clickable through the keyboard(
  fix this using if(display.textContent < 9){//the number
  code goes here} done
)

number after equal to is pressed concatenates. fix this (done)

when you click an operator more than ones it can't be used and 
therefore displays NaN. Fix this

i need you to reduce the code. Too many repeated codes. The 
clicks i think can be reduced to just one and the keydown should
also be reduced to only one 

keydown for the signs 
currently trying to figure out decimal
error message when you input what can't be solved

pressing 0 and then a number followed by number operator 
gives just the number before the operator. 
(possible thing to try. if the length is 1 and the display 
  is 0, empty the arr)
e.g ['0', '1', '-', '2'] gives -2 (fixed)

make sure a sign can be clicked only ones

sign and then decimal e.g /.

this plus too dey give me wahala. Now 2 + 3 = 5 + 2 is giving 
me 52 instead of 7(fixed by doing this let result = Number(arr[0]);)

decimal seems to be giving me a shit load of problems
*/
