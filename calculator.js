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
let firstNumber;
let secondNumber;
let operator;

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
console.log(operate(2,"+",5));
console.log(operate(2,"*",5));
console.log(operate(15,"/",3));
console.log(operate(25,"*",2));
console.log(operate)
