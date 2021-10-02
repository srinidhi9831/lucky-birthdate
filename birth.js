var button = document.querySelector("#button");
var db=document.querySelector("#date")
var luckyNumber=document.querySelector("#lucky");
var output=document.querySelector("#output-div");

button.addEventListener("click",eventHandler);

function eventHandler(){
   if(validate(db.value,luckyNumber.value)) 
     isLucky(sum(db.value),luckyNumber.value);
}

function sum(date){
    var newDate=0;
    for(var i=0;i<date.length;i++)
    {
          if(!isNaN(date[i])){
              newDate=newDate+parseInt(date[i]);
          }

    }
    return newDate;
}

function isLucky(sum,luckyNumber){
    
   
    if(sum%luckyNumber==0)
    {
        show("you got a lucky birth date");
    }
    else{
        show("oops!! NOT LUCKY")
    }
}

function show(message){
    output.innerText= `${message}`;
}

function validate(date,luckyNumber){
    if(date=="" || luckyNumber==""){
       alert("please fill out all details");
       return false;
    }
    else{
        return true;
    }
}