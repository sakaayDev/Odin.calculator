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
let numbers,decimalP,result,resultBtn,clear,operators,number1,number2,operat,backspaceBtn;

//function that return whatever math operation we want depending on operator chosen 
function operate(number1,operator,number2){
    if( operator ==="+"){
        return add(number1,number2)
    }else if(operator ==="-"){
        return substract(number1,number2)
    }else if(operator ==="÷"){
        return divide(number1,number2)        
    }else if(operator ==="*"){
        return multiply(number1,number2)
    }else if(operator ==="^"){
        return power(number1,number2)
    };
}

let display = document.querySelector(".mainDisplay");
let secondaryDisplay = document.querySelector(".secondaryDisplay");

//handle numbers click,also save number2 into it's variable
decimalP = document.querySelector(".decimalpoint");
decimalP.addEventListener("click",()=>{
    if(display.value ==="ERROR"){
        clearCalculator();
        decimalReset();
    // }else if(display.vlaue ===null || display.value ===""){
    //     decimalReset();
    // }else if(display.value ===operat){
    //     display.value =0;
    //     display.value +=decimalP.textContent;
    //     secondaryDisplay +=decimalP.textContent;
    // }
    }else if(display.value.includes(".")){

    }else{
        display.value +=decimalP.textContent;
        secondaryDisplay.value +=decimalP.textContent
    }
    

});

numbers = document.querySelectorAll(".number");
let numberClicked =numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        if(display.value ==="ERROR"){
            clearCalculator();
        };
        if(display.value === operat){
            display.value=null;
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
        if(display.value ==="ERROR"){
            clearCalculator();
        };
        if(number1 && result){
            number1 = result;
            display.value=null;
            display.value += operator.textContent;
            operat = display.value;
        }
        else if(number1){
            display.value=null;
            display.value += operator.textContent;
            operat = display.value;
        }
        else if(display.value !=null ){
            number1 = Number(display.value);
            display.value=null;
            display.value += operator.textContent;
            operat = display.value;
        };
        secondaryDisplay.value += operator.textContent;
    });
});
//clear the display by removing everything
clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    
    clearCalculator();
});

backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", () => {
    // Remove the last character from the display's value
    if(Number(display.value) === result){
        let slicedResult = result.toString().slice(0,-1);
        result = Number(slicedResult);
    }else if (Number(display.value) === number2){
        let slicednumber2 = number2.toString().slice(0,-1);
        number2 = Number(slicednumber2);
    };
    display.value = display.value.slice(0, -1);
    secondaryDisplay.value = secondaryDisplay.value.slice(0,-1);
});

//what happen when click = btn 
resultBtn = document.querySelector("#resultBtn");
resultBtn.addEventListener("click",()=>{
    ;
    if(number1,number2,operat){
        if(number2 ===0 && operat ==="÷"){
            display.value ="ERROR";
            secondaryDisplay.value="ERROR";
        }else
        {display.value=null;
        result = operate(number1,operat,number2);
        display.value = result;
        secondaryDisplay.value = result;}
        
    };
});


function clearCalculator() {
    display.value =null;
    secondaryDisplay.value=null;
    number1=null;
    number2=null;
    operat=null;
    result=null;
    
};
function decimalReset(){
    display.value =0;
    secondaryDisplay=0;
    display.value +=decimalP.textContent;
    secondaryDisplay +=decimalP.textContent;
};