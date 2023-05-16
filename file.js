/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const equal = document.querySelector(".equal");
const plusMinus = document.querySelector(".plus_minus");
const clearButton = document.querySelector(".ac");
const percentage = document.querySelector(".percentage");
const decimal = document.querySelector(".decimal");
const display = document.querySelector(".display_screen");
const time = document.querySelector(".time");
const message = document.querySelector(".message");
const message2 = document.querySelector(".message2");

const currDate = new Date();
const hoursMin = `${currDate.getHours()}:${currDate.getMinutes()}`;
time.textContent = hoursMin;

let clickCount = 0;

let arr = [];

const value = Array.from(
  document.querySelectorAll(
    ".one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero"
  )
);

const signs = Array.from(
  document.querySelectorAll(".addition, .subtract, .multiply, .divide")
);

signs.forEach((signs) => {
  const value = signs.textContent;
  console.log(signs.textContent);
  document.addEventListener("keydown", (e) => {
    if (e.key === `${value}`) {
      if (
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "/" ||
        display.textContent === "x"
      ) {
        const index = arr.length - 1;
        arr.splice(index, 1);
      }
      if (arr.length !== 0) {
        display.textContent = `${value}`;
        arr.push(display.textContent);
        clickCount = 0;
        console.log(arr);
      } else {
        arr = [];
      }
    }
  });
});

function operator() {
  let result = Number(arr[0]);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      result += arr[i + 1];
    } else if (arr[i] === "-") {
      result -= arr[i + 1];
    } else if (arr[i] === "x") {
      result *= arr[i + 1];
    } else if (arr[i] === "/") {
      result /= arr[i + 1];
    }
  }
  return result;
}

value.forEach((value) => {
  /* Keydown start for number buttons */
  document.addEventListener("keydown", (e) => {
    if (e.key === `${value.textContent}`) {
      if (display.textContent.length < 9) {
        if (display.textContent === "0." && clickCount === 0) {
          display.textContent += value.textContent;
          arr.splice(arr.length - 1, 1);
          arr.push(Number(display.textContent));
          console.log(arr);
          clickCount = 0;
        } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
          display.textContent += value.textContent;
          const result = Number(`${display.textContent}`);
          arr.pop();
          arr.push(result);
          console.log(arr);
          clickCount = 0;
        } else if (
          /[0+-/] || [*]/.test(display.textContent) &&
          clickCount === 0
        ) {
          display.textContent = value.textContent;
          arr.push(Number(value.textContent));
          console.log(arr);
          clickCount = 0;
        } else if (clickCount !== 0) {
          display.textContent = value.textContent;
          arr = [];
          arr.push(Number(display.textContent));
          console.log(arr);
          clickCount = 0;
        }
      } else {
        setTimeout(() => {
          message.style.visibility = "visible";
          message2.style.visibility = "hidden";
        }, 50);
        setTimeout(() => {
          message.style.visibility = "hidden";
        }, 2000);
      }
    }
  });
});
/* keydown end for number buttons */

/* keydown start for sign buttons */
document.addEventListener("keydown", (e) => {
  if (e.key === "=" || e.key === "Enter") {
    const result = operator(arr);
    // eslint-disable-next-line eqeqeq
    if (!arr.length == 0) {
      if (result.toString().length > 9) {
        display.textContent = result.toFixed(2);
        arr = [];
        arr.push(display.textContent);
        clickCount++;
      } else if (
        arr[arr.length - 1] === "+" ||
        arr[arr.length - 1] === "-" ||
        arr[arr.length - 1] === "/" ||
        arr[arr.length - 1] === "*"
      ) {
        setTimeout(() => {
          message2.style.visibility = "visible";
        }, 50);
        setTimeout(() => {
          message2.style.visibility = "hidden";
        }, 2000);
      } else {
        display.textContent = result;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
        // console.log(clickCount);
      }
    }
  } else if (e.key === "Escape") {
    display.textContent = 0;
    arr = [];
    console.clear();
  } else if (e.key === "%") {
    if (arr.length !== 0) {
      const value = arr.indexOf(display.textContent);
      const result = display.textContent / 100;
      display.textContent = result;
      arr.splice(value, 1, result);
    } else {
      arr = [];
    }
  }
});
/* keydown end for sign buttons */

value.forEach((value) => {
  const num = value.className;
  // console.log(num);
  document.querySelector(`.${num}`).addEventListener("click", () => {
    if (display.textContent.length < 9) {
      if (display.textContent === "0") {
        arr = [];
      }
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += value.textContent;
        arr.splice(arr.length - 1, 1);
        console.log(display.textContent);
        arr.push(Number(display.textContent));

        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += value.textContent;
        console.log(display.textContent);
        const result = Number(`${display.textContent}`);
        console.log(typeof result);
        arr.pop();
        arr.push(result);
        console.log(display.textContent);
        console.log(arr);
        clickCount = 0;
      } else if (
        /[0+-/] || [x]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = value.textContent;
        console.log(display.textContent);
        arr.push(Number(display.textContent));
        console.log(arr);
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = value.textContent;
        arr = [];
        arr.push(display.textContent);
        clickCount = 0;
      }
    } else {
      setTimeout(() => {
        message.style.visibility = "visible";
        message2.style.visibility = "hidden";
      }, 50);
      setTimeout(() => {
        message.style.visibility = "hidden";
      }, 2000);
    }
  });
});

// console.log(signs);

signs.forEach((signs) => {
  const operators = signs.className;
  // console.log(operators);
  document.querySelector(`.${operators}`).addEventListener("click", () => {
    if (
      display.textContent === "+" ||
      display.textContent === "-" ||
      display.textContent === "/" ||
      display.textContent === "x"
    ) {
      const index = arr.length - 1;
      arr.splice(index, 1);
    }
    if (arr.length !== 0) {
      display.textContent = signs.textContent;
      arr.push(display.textContent);
      console.log(arr);
      clickCount = 0;
    }
  });
});

decimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    if (/[0-9]/.test(display.textContent)) {
      display.textContent += ".";
      arr.splice(arr.length - 1, 1);
      arr.push(display.textContent);
      clickCount = 0;
    }
  }
});

percentage.addEventListener("click", () => {
  if (arr.length !== 0) {
    const index = arr.indexOf(display.textContent);
    const result = display.textContent / 100;
    display.textContent = result;
    arr.splice(index, 1, result);
  } else {
    arr = [];
  }
});

plusMinus.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (
      display.textContent === "*" ||
      display.textContent === "+" ||
      display.textContent === "-" ||
      display.textContent === "/"
    ) {
      /* empty */
    } else if (display.textContent[0] === "-" && arr.length === 1) {
      const newArr = [];
      newArr.push(...arr);
      arr = [];
      arr.push(display.textContent.slice(1));
      display.textContent = display.textContent.slice(1);
    } else if (
      display.textContent[0] === "-" &&
      arr.length > 1 &&
      display.textContent.length < 2
    ) {
      const slicedValues = display.textContent.slice(1);
      const displayValue = Number(slicedValues);
      display.textContent = slicedValues;
      const { length } = arr;
      arr.splice(length - 1, 1, displayValue);
    } else if (display.textContent === "0") {
      setTimeout(() => {
        message2.style.visibility = "visible";
        message.style.visibility = "hidden";
      }, 50);
      setTimeout(() => {
        message2.style.visibility = "hidden";
      }, 2000);
    } else if (display.textContent[0] !== "-") {
      display.textContent = `-${display.textContent}`;
      arr.push(Number(display.textContent));
      const index = arr.length - 1;
      arr.splice(index - 1, 1);
    } else if (display.textContent[0] === "-" && arr.length > 1) {
      const slicedValues = display.textContent.slice(1);
      const displayValue = Number(slicedValues);
      display.textContent = slicedValues;
      const { length } = arr;
      arr.splice(length - 1, 1, displayValue);
    }
  } else if (display.textContent[0] !== "-") {
    setTimeout(() => {
      message.style.visibility = "visible";
    }, 50);
    setTimeout(() => {
      message.style.visibility = "hidden";
    }, 2000);
  } else if (
    display.textContent[0] === "-" &&
    display.textContent.length > 2 &&
    arr.length === 1
  ) {
    const slicedValues = display.textContent.slice(1);
    const displayValue = Number(slicedValues);
    display.textContent = slicedValues;
    const { length } = arr;
    arr.splice(length - 1, 1, displayValue);
  } else if (
    display.textContent[0] === "-" &&
    display.textContent.length > 2 &&
    arr.length > 1
  ) {
    const slicedValues = display.textContent.slice(1);
    const displayValue = Number(slicedValues);
    display.textContent = slicedValues;
    const { length } = arr;
    arr.splice(length - 1, 1, displayValue);
  }
});

equal.addEventListener("click", () => {
  const result = operator(arr);
  // eslint-disable-next-line eqeqeq
  if (!arr.length == 0) {
    if (result.toString().length > 9) {
      display.textContent = result.toFixed(2);
      arr = [];
      arr.push(display.textContent);
      console.log(arr);
      clickCount++;
    } else if (
      arr[arr.length - 1] === "+" ||
      arr[arr.length - 1] === "-" ||
      arr[arr.length - 1] === "/" ||
      arr[arr.length - 1] === "*"
    ) {
      setTimeout(() => {
        message2.style.visibility = "visible";
      }, 50);
      setTimeout(() => {
        message2.style.visibility = "hidden";
      }, 2000);
    } else {
      display.textContent = result;
      arr = [];
      arr.push(display.textContent);
      console.log(arr);
      clickCount++;
    }
  }
});

clearButton.addEventListener("click", () => {
  display.textContent = 0;
  console.clear();
  arr = [];
  clickCount = 0;
});

/*
approximation not working or not in i.e 99999999999 * 99999
the result is overflowing. Fix it
work on * and x
*/
