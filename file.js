/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
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
const time = document.querySelector(".time");
const message = document.querySelector(".message");
const message2 = document.querySelector(".message2");

const currDate = new Date();
const hoursMin = `${currDate.getHours()}:${currDate.getMinutes()}`;
time.textContent = hoursMin;

let clickCount = 0;

let arr = [];

function operator() {
  let result = Number(arr[0]);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      result += arr[i + 1];
    } else if (arr[i] === "-") {
      result -= arr[i + 1];
    } else if (arr[i] === "*") {
      result *= arr[i + 1];
    } else if (arr[i] === "/") {
      result /= arr[i + 1];
    }
  }
  return result;
}

/* Keydown start for number buttons */
document.addEventListener("keydown", (e) => {
  if (e.key === "0") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 0;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 0;
        const result = Number(`${arr[arr.length - 1]}0`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 0;
        arr.push(0);
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 0;
        arr = [];
        arr.push(display.textContent);
        // eslint-disable-next-line no-plusplus
        clickCount++;
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
  } else if (e.key === "1") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 1;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 1;
        const result = Number(`${arr[arr.length - 1]}1`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 1;
        arr.push(1);
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 1;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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
  } else if (e.key === "2") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 2;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 2;
        const result = Number(`${arr[arr.length - 1]}2`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 2;
        arr.push(2);
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 2;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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
  } else if (e.key === "3") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 3;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 3;
        const result = Number(`${arr[arr.length - 1]}3`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 3;
        arr.push(3);
        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 3;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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
  } else if (e.key === "4") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 4;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 4;
        const result = Number(`${arr[arr.length - 1]}4`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 4;
        arr.push(4);

        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 4;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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
  } else if (e.key === "5") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 5;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 5;
        const result = Number(`${arr[arr.length - 1]}5`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 5;
        arr.push(5);

        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 5;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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
  } else if (e.key === "6") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 6;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 6;
        const result = Number(`${arr[arr.length - 1]}6`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 6;
        arr.push(6);

        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 6;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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
  } else if (e.key === "7") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 7;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 7;
        const result = Number(`${arr[arr.length - 1]}7`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 7;
        arr.push(7);

        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 7;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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
  } else if (e.key === "8") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 8;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 8;
        const result = Number(`${arr[arr.length - 1]}8`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 8;
        arr.push(8);

        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 8;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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
  } else if (e.key === "9") {
    if (display.textContent.length < 9) {
      if (display.textContent === "0." && clickCount === 0) {
        display.textContent += 9;
        arr.splice(arr.length - 1, 1);
        arr.push(Number(display.textContent));
        clickCount = 0;
      } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
        display.textContent += 9;
        const result = Number(`${arr[arr.length - 1]}9`);
        arr.pop();
        arr.push(result);
        clickCount = 0;
      } else if (
        /[0+-/] || [*]/.test(display.textContent) &&
        clickCount === 0
      ) {
        display.textContent = 9;
        arr.push(9);

        clickCount = 0;
      } else if (clickCount !== 0) {
        display.textContent = 9;
        arr = [];
        arr.push(display.textContent);
        clickCount++;
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

/* keydown end for number buttons */

/* keydown start for sign buttons */
document.addEventListener("keydown", (e) => {
  if (e.key === "+") {
    if (arr.length !== 0) {
      display.textContent = "+";
      arr.push("+");
      clickCount = 0;
    }
  } else if (e.key === "-") {
    if (arr.length !== 0) {
      display.textContent = "-";
      arr.push("-");
    } else {
      arr = [];
    }
  } else if (e.key === "*") {
    if (arr.length !== 0) {
      display.textContent = "*";
      arr.push("*");
    } else {
      arr = [];
    }
  } else if (e.key === "/") {
    if (arr.length !== 0) {
      display.textContent = "/";
      arr.push("/");
    } else {
      arr = [];
    }
  } else if (e.key === "=" || e.key === "Enter") {
    const result = operator(arr);
    if (!arr.length === 0) {
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
zero.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 0;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 0;
      const result = Number(`${arr[arr.length - 1]}0`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 0;
      arr.push(0);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 0;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

one.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 1;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 1;
      const result = Number(`${arr[arr.length - 1]}1`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 1;
      arr.push(1);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 1;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

two.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 2;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 2;
      const result = Number(`${arr[arr.length - 1]}2`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 2;
      arr.push(2);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 2;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

three.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 3;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 3;
      const result = Number(`${arr[arr.length - 1]}3`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 3;
      arr.push(3);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 3;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

four.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 4;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 4;
      const result = Number(`${arr[arr.length - 1]}4`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 4;
      arr.push(4);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 4;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

five.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 5;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 5;
      const result = Number(`${arr[arr.length - 1]}5`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 5;
      arr.push(5);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 5;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

six.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 6;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 6;
      const result = Number(`${arr[arr.length - 1]}6`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 6;
      arr.push(6);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 6;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

seven.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 7;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 7;
      const result = Number(`${arr[arr.length - 1]}7`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 7;
      arr.push(7);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 7;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

eight.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 8;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 8;
      const result = Number(`${arr[arr.length - 1]}8`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 8;
      arr.push(8);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 8;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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

nine.addEventListener("click", () => {
  if (display.textContent.length < 9) {
    if (display.textContent === "0." && clickCount === 0) {
      display.textContent += 9;
      arr.splice(arr.length - 1, 1);
      arr.push(Number(display.textContent));
      clickCount = 0;
    } else if (/[1-9]/.test(display.textContent) && clickCount === 0) {
      display.textContent += 9;
      const result = Number(`${arr[arr.length - 1]}9`);
      arr.pop();
      arr.push(result);
      clickCount = 0;
    } else if (/[0+-/] || [*]/.test(display.textContent) && clickCount === 0) {
      display.textContent = 9;
      arr.push(9);

      clickCount = 0;
    } else if (clickCount !== 0) {
      display.textContent = 9;
      arr = [];
      arr.push(display.textContent);
      clickCount++;
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
    const value = arr.indexOf(display.textContent);
    const result = display.textContent / 100;
    display.textContent = result;
    arr.splice(value, 1, result);
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

divide.addEventListener("click", () => {
  if (
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "/" ||
    display.textContent === "*"
  ) {
    const index = arr.length - 1;
    arr.splice(index, 1);
  }
  if (arr.length !== 0) {
    display.textContent = "/";
    arr.push("/");
    clickCount = 0;
  }
});

multiply.addEventListener("click", () => {
  if (
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "/" ||
    display.textContent === "*"
  ) {
    const index = arr.length - 1;
    arr.splice(index, 1);
  }
  if (arr.length !== 0) {
    display.textContent = "*";
    arr.push("*");
    clickCount = 0;
  }
});

addButton.addEventListener("click", () => {
  if (
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "/" ||
    display.textContent === "*"
  ) {
    const index = arr.length - 1;
    arr.splice(index, 1);
  }
  if (arr.length !== 0) {
    display.textContent = "+";
    arr.push("+");
    clickCount = 0;
  }
});

subtract.addEventListener("click", () => {
  if (
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "/" ||
    display.textContent === "*"
  ) {
    const index = arr.length - 1;
    arr.splice(index, 1);
  }
  if (arr.length !== 0) {
    display.textContent = "-";
    arr.push("-");
    clickCount = 0;
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
    }
  }
});

clearButton.addEventListener("click", () => {
  display.textContent = 0;
  arr = [];
  clickCount = 0;
});
