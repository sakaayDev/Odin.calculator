function add(number1,number2){
    return number1 + number2;
};

function substract(number1,number2){
    return number1 - number2 ;
};

function multiply(number1,number2){
    return number1 * number2 ;
};

function divide(number1,number2){
    return number1 / number2 ;
}
let numbers = [], firstNumber,secondNumber,operator;


function operate(number1,operator,number2){
    if( operator ==="+"){
        return add(number1,number2)
    }else if(operator ==="-"){
        return substract(number1,number2)
    }else if(operator ==="/"){
        return divide(number1,number2)        
    }else if(operator ==="*"){
        return multiply(number1,number2)
    };
}
let display = document.querySelector("#display input");

// let resetBtn = document.querySelector("#reset input");
// resetBtn.addEventListener("click",()=> display.value ='');
// let buttons =document.querySelectorAll("#btn-container button");
// buttons.forEach(button => button.addEventListener("click",()=> {
//     if(button.textContent ==="="){
//         let parts;
//         parts = display.value.split(/\s*(\*\*|[+\-*/])\s*/);
//         parts.forEach(part => {
//             if (isNaN(part)){
//                 operator = part;
//             }else {
//                 numbers.push(Number(part));
//             }
//             number1 = numbers[0];
//             number2 = numbers[1];
//         });
        
//     }else {display.value +=button.textContent}
// }));
        
//  i need to store first and second number and operator?//
// split the input field using regular expression? then store index 0 and 1 in       number1 and 2//
// \s*: This part of the regex matches any whitespace character (spaces, tabs, etc.) zero or more times.
// Including \s* allows your regex to handle cases where there might be spaces around the operators. For example, it would match both 12344 + 91257 and 12344+91257.

