document.getElementById('formd').addEventListener('submit',function(e){
    e.preventDefault();
    let YourName=document.getElementById('YourName').value.trim().toUpperCase();
    let PartnerName=document.getElementById('Partner Name').value.trim().toUpperCase();
    let result=document.getElementById('container1');
    if(YourName===""||PartnerName===""){
        alert('Enter Both The Names')
    }
    let lperc=Math.floor(Math.random()*101);
    result.innerHTML=`${YourName} and ${PartnerName}'s Love Percentage: ${lperc}%`
    if(lperc<30){
        result.innerHTML+="<br> Not a Good Match Keep Looking";
    }
    else if(lperc>=30  && lperc<=70){
        result.innerHTML+="<br> Potential Give a Try";
    }
    else{
        result.innerHTML+="<br> Great Match Love is in the air";
    }
})