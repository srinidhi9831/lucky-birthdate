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

function isLucky(){
    
    var db=document.getElementById("date").value;
    var luckyNumber=parseInt(document.getElementById("lucky").value);
    if(sum(db)%luckyNumber==0)
    {
        document.getElementById("output-div").innerText="you got a LUCKY birth date!!";
    }
    else{
        document.getElementById("output-div").innerText="oops not Lucky!!";
    }
}
