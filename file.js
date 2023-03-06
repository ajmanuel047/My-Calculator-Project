let addition = (num1, num2) => {
    return num1 + num2
}
// addition(2, 2)

let subtraction = (num2, num1) => {
    return num2 - num1
}
subtraction(5, -2)

let multiplication = (num1, num2) => {
    return num1 * num2
}
multiplication(-2, 3)

let division = (num1, num2) => {
    return num2 / num1
}
division(2, 10)

let operate = (operator, num1, num2) => {
    return operator(num1, num2)
}
console.log(operate(multiplication, 2, 4))