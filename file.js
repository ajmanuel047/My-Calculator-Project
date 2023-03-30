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
const addButton = document.querySelector('.addition');
const multiply = document.querySelector('.multiply');
const equal = document.querySelector('.equal');
const plusMinus = document.querySelector('.plus_minus');
const clearButton = document.querySelector('.ac');
const percentage = document.querySelector('.percentage');
const decimal = document.querySelector('.decimal');
const displayScreen = document.querySelector('.display_screen');
const buttonsContainer = document.querySelector('.buttons_container');
const time = document.querySelector('.time')

// let myButton = document.getElementById("myButton");
// let myVariable;

// myButton.addEventListener("click", function() {
//   myVariable = 1;
//   console.log(myVariable);
// });

 let currDate = new Date();
 let hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
 time.textContent = hoursMin

 let clickCount = 0
// let num1 = undefined;
// let num2 = undefined;
let arr = [];
displayScreen.textContent = 0;
let displayScreenValues = displayScreen;
let num1 = 0;
let num2 = 0;
// console.log(num1)
// // console.log(num2)
// console.log(num1 - num2)
let addition = () => {
    return '+' ;
}; 
//  addition(num1, num2)


let subtraction = (num2, num1) => {
    return num2 - num1;
};

let multiplication = (num1, num2) => {
    return num1 * num2;
};

let division = (num1, num2) => {
    return num2 / num1;
};


  
function add(arr){
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== "+"){
            sum += Number(arr[i])
        }
    } 
    return sum
    }

        let operate = (array) => {
            // console.log(operator());
            // console.log(array);
            let sum = add(array);
            return sum;
          };
// operate(addition(add()))

zero.addEventListener('click', function(){
    if(displayScreen.textContent == 0){
        displayScreen.textContent = 0;
    } else {
            displayScreen.textContent += 0;
    };     
});

one.addEventListener('click', function(){
    clickCount++
    if(displayScreen.textContent == 0 || displayScreen.textContent == '+'){
         displayScreen.textContent = 1;
         arr.push(1)
    } else if(typeof arr[0] == 'string' && arr.length == 1 ){
        arr = []
        arr.push(1)
        displayScreen.textContent = 1
    }
    else if(clickCount === 2){
         displayScreen.textContent += 1
       
       let result = Number(arr[arr.length - 1] + '1');
         arr.pop()
         arr.push(result)
         clickCount = 0;
      }
    else if(displayScreen.textContent.length > 2){
         displayScreen.textContent += 1
         let result = Number(arr[arr.length - 1] + '1');
         arr.pop()
         arr.push(result)
         console.log('yessss')
         clickCount = 0;
       
    }
    else{
         displayScreen.textContent += 1
         let result = Number(arr[arr.length - 1] + '1');
         arr.pop()
         arr.push(result)
         
         
        console.log('yessss')
    }
    console.log(`length : ${displayScreen.textContent.length}`)
    
    console.log(displayScreen.textContent)
     num1 = Number(displayScreen.textContent)
     console.log(arr)
    //  if(arr[0] === NaN){
    //     display.textContent = 1
    //  }
    })
    document.addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() !== 'button') {
            clickCount = 0;
        }
      });
    


      two.addEventListener('click', function(){
        if(displayScreen.textContent == 0 || displayScreen.textContent == '+'){
            displayScreen.textContent = 2;
            arr.push(2)
            clickCount = 0;
        } else if(typeof arr[0] == 'string' && arr.length == 1 ){
            arr = []
            arr.push(2)
            displayScreen.textContent = 2
        }
        else if(clickCount === 2){
            displayScreen.textContent += 2
            let result = Number(arr[arr.length - 1] + '2');
            arr.pop()
            arr.push(result)        
            clickCount = 0;
          }
          else if(displayScreen.textContent.length > 2){
            display.textContent += 2
            let result = Number(arr[arr.length - 1] + '2');
            arr.pop()
            arr.push(result)
            console.log('yessss')
            clickCount = 0;
           
        }
        else{
            displayScreen.textContent += 2
            let result = Number(arr[arr.length - 1] + '2');
            arr.pop()
            arr.push(result)
            console.log('yessss')
        }
            console.log(displayScreen.textContent)
            num2 = Number(displayScreen.textContent)
            console.log(arr)
    })


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

addButton.addEventListener('click', function(){
 console.log(addition())
    displayScreen.textContent = '+'
    arr.push('+')
    // console.log(displayScreen.textContent)
    // console.log(addition())
});

subtract.addEventListener('click', function(){

});

equal.addEventListener('click', function(){
    //    displayScreen.textContent = (operate(addition, num1, num2))
    // displayScreen.textContent = (operate(addition, 3, 4))
    // displayScreen.textContent = (operate(multiplication, 3, 4))
    // console.log(operate(add(arr)))
    displayScreen.textContent = operate(arr)
    let result = operate(arr)
     arr = []
     arr.push(result.toString())
     console.log(typeof result)
     console.log(arr)
});

clearButton.addEventListener('click', function(){
    displayScreen.textContent = 0
    arr = []
    console.clear()
  
});

percentage.addEventListener('click', function(){

})

plusMinus.addEventListener('click', function(){

});

decimal.addEventListener('click', function(){

});