const zero = document.querySelector('.num0');
const one = document.querySelector('.num1');
const two = document.querySelector('.num2');
const three = document.querySelector('.num3');
const four = document.querySelector('.num4');
const five = document.querySelector('.num5');
const six = document.querySelector('.num6');
const seven = document.querySelector('.num7');
const eight = document.querySelector('.num8');
const nine = document.querySelector('.num9');
const divide = document.querySelector('.divide');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.addition');
const multiply = document.querySelector('.multiply');
const equal = document.querySelector('.equal');
const plus_minus = document.querySelector('.plus_minus');
const clearButton = document.querySelector('.ac');
const percentage = document.querySelector('.percentage');
const decimal = document.querySelector('.decimal')

let addition = (num1, num2) => {
    return num1 + num2;
};

let subtraction = (num2, num1) => {
    return num2 - num1;
};

let multiplication = (num1, num2) => {
    return num1 * num2;
};

let division = (num1, num2) => {
    return num2 / num1;
};

let operate = (operator, num1, num2) => {
    console.log(operator(num1, num2));
};
operate(multiplication, 2, 4);

zero.addEventListener('click', function(){

});

one.addEventListener('click', function(){

});

two.addEventListener('click', function(){

});

three.addEventListener('click', function(){

});

four.addEventListener('click', function(){

});

five.addEventListener('click', function(){

});

six.addEventListener('click', function(){

});

seven.addEventListener('click', function(){

});

eight.addEventListener('click', function(){

});

nine.addEventListener('click', function(){

});

divide.addEventListener('click', function(){

});

multiply.addEventListener('click', function(){

});

add.addEventListener('click', function(){
document.body.style.backgroundColor = 'green'
});

subtract.addEventListener('click', function(){

});

equal.addEventListener('click', function(){

});

clearButton.addEventListener('click', function(){

});

percentage.addEventListener('click', function(){

})

plus_minus.addEventListener('click', function(){

});

decimal.addEventListener('click', function(){

});