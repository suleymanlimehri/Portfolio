let number1=document.querySelector(".numberone")
let number2=document.querySelector(".numbertwo")
let result=document.querySelector(".result")
let plusbtn=document.querySelector(".btn-plus")
let minusbtn=document.querySelector(".btn-minus")
let multbtn=document.querySelector(".btn-mult")
let devicebtn=document.querySelector(".btn-device")

plusbtn.addEventListener("click",sum)
function sum(){    
    if (number1.value!=="" && number2.value!=="") {
        let sum=Number(number1.value)+Number(number2.value)
        result.value=sum;
    }else{
        alert("please enter number")
    }    
    
    number1.value=""
    number2.value=""
}

minusbtn.addEventListener("click",minus)
function minus(){
    if (number1.value!=="" && number2.value!=="") {
        let minus=Number(number1.value)-Number(number2.value)
        result.value=minus;
    }else{
        alert("please enter number")
    }    
    
    number1.value=""
    number2.value=""
}
multbtn.addEventListener("click",mult)
function mult(){
    if (number1.value!=="" && number2.value!=="") {
        let mult=Number(number1.value)*Number(number2.value)
        result.value=mult;
    }else{
        alert("please enter number")
    }    
    
    number1.value=""
    number2.value=""
}
devicebtn.addEventListener("click",device)
function device(){
    if (number1.value!=="" && number2.value!=="") {
        let device=Number(number1.value)/Number(number2.value)
        result.value=device;
    }else{
        alert("please enter number")
    }    
    
    number1.value=""
    number2.value=""
}