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
const plusMinus = document.querySelector('.plus_minus');
const clearButton = document.querySelector('.ac');
const percentage = document.querySelector('.percentage');
const decimal = document.querySelector('.decimal');
const displayScreen = document.querySelector('.display_screen');
const buttonsContainer = document.querySelector('.buttons_container');

displayScreen.textContent = 0


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
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 0;
    } else {
            displayScreen.textContent += 0;
    }; 
    
});

one.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 1;
    } else {
        displayScreen.textContent += 1;
    }
});

two.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 2;
    } else {
            displayScreen.textContent += 2;
    }; 
});

three.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 3;
    } else {
            displayScreen.textContent += 3;
    }; 
});

four.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 4;
    } else {
            displayScreen.textContent += 4;
    }; 
});

five.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 5;
    } else {
            displayScreen.textContent += 5;
    }; 
});

six.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 6;
    } else {
            displayScreen.textContent += 6;
    }; 
});

seven.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 7;
    } else {
            displayScreen.textContent += 7;
    }; 
});

eight.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
         displayScreen.textContent = 8;
    } else {
            displayScreen.textContent += 8;
    }; 
});

nine.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 9;
    } else {
            displayScreen.textContent += 9;
    }; 
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

plusMinus.addEventListener('click', function(){

});

decimal.addEventListener('click', function(){

});