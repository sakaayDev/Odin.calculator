//function for calculator operation
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
function power(number1,number2){
    return number1 ** number2;
};
// init variable that hold number1,number2,operator,result
let numbers,result,resultBtn,clear,operators,number1,number2,operat;

//function that return whatever math operation we want depending on operator chosen 
function operate(number1,operator,number2){
    if( operator ==="+"){
        return add(number1,number2)
    }else if(operator ==="-"){
        return substract(number1,number2)
    }else if(operator ==="/"){
        return divide(number1,number2)        
    }else if(operator ==="*"){
        return multiply(number1,number2)
    }else if(operator ==="^"){
        return power(number1,number2)
    };
}

let display = document.querySelector(".mainDisplay");
let secondaryDisplay = document.querySelector(".secondaryDisplay");
display.value =0;
//handle numbers click,also save number2 into it's variable
numbers = document.querySelectorAll(".number");
let numberClicked =numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        if(display.value === operat){
            display.value="";
            display.value += number.textContent;
            number2 = Number(display.value);
        }else if(operat){
            display.value +=number.textContent;
            number2 = Number(display.value);
        }else {
            display.value += number.textContent;
        }
        secondaryDisplay.value += number.textContent;
    });
});
//handle operator click,also save number1 and operator into their variable
operators = document.querySelectorAll(".operator");
operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        if(number1 && result){
            number1 = result;
            display.value="";
            display.value += operator.textContent;
            operat = display.value;
        }
        else if(number1){
            display.value="";
            display.value += operator.textContent;
            operat = display.value;
        }
        else if(display.value !="" ){
            number1 = Number(display.value);
            display.value="";
            display.value += operator.textContent;
            operat = display.value;
        };
        secondaryDisplay.value += operator.textContent;
    });
});

clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    display.value ="";
    secondaryDisplay.value="";
    number1="";
    number2="";
    operat="";
    result="";
    
});

resultBtn = document.querySelector("#resultBtn");
resultBtn.addEventListener("click",()=>{
    ;
    if(number1,number2,operat){
        display.value="";
        result = operate(number1,operat,number2);
        display.value = result;
    }
})




