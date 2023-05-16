const btnE1 = document.getElementById("btn");
const bmiInputE1 = document.getElementById("bmi-result");
const weightconditionE1 = document.getElementById("weight-condition");

function calculateBMI(){
    
    const heightvalue = document.getElementById("height").value/100;
    const weightvalue = document.getElementById("weight").value;
    const bmivalue = weightvalue / (heightvalue * heightvalue);
    bmiInputE1.value = bmivalue;

    if(bmivalue <18.5){
        weightconditionE1.innerText = "Under weight";
    }
    else if (bmivalue >=18.5 && bmivalue <= 24.9){
        weightconditionE1.innerText = "Normal weight";
    }
    else if(bmivalue >=25 && bmivalue <=29.9){
        weightconditionE1.innerText = "Overweight";
    }
    else if(bmivalue >30){
        weightconditionE1.innerText = "Obesity";
    }
}

btnE1.addEventListener("click",calculateBMI)