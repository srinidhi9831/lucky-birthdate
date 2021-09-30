function sum(date){
    var dateSum=0;
    while(date>0){
        dateSum=dateSum+ (date%10);
        date= Math.floor(date/10);
        //console.log(dateSum);
    }
    console.log(dateSum);
    return dateSum;
}

function isLucky(){
    
    var db=document.getElementById("date").value;
    var luckyNumber=document.getElementById("lucky").value;
    if(sum(db)%luckyNumber==0)
    {
        document.getElementById("output-div").innerText="you got a LUCKY birth date!!";
    }
    else{
        document.getElementById("output-div").innerText="oops not Lucky!!";
    }
}
