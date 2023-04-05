function meternum(){
    var a=document.getElementById("num").value;
     if(a.length >2){
    document.getElementById("demo").innerHTML=
    "Please Chose Our Category";
    document.getElementById("option").style.display="block";
    num.focus();
    num.style.border="2px solid #2ab3d3";
    demo.style.color="#2e2bd3";
       }
      else
   {
    document.getElementById("demo").innerHTML=
        "Please Enter Your Correct Number";
        num.focus();
        num.style.border="2px solid #ff0000";
        demo.style.color="#ff0000";
        }
    
}
function myfunction(val){
if(val==1){
    document.getElementById("d1").style.display="block";
    document.getElementById("d2").style.display="none";
}
if(val==2){
    document.getElementById("d1").style.display="none";
    document.getElementById("d2").style.display="block";
}
}
function amount1(){
    var U=document.getElementById("amt1").value;
    var S=50;
    var bill=0.0;
    if (U>0 && U<75){
        bill=(U*1.25)+S;
        document.getElementById("d1").innerHTML="Bill Amount :"+bill;
    }
    else if(U>75 && U<250){
        bill=(U*1.75)+S;
        document.getElementById("d1").innerHTML="Bill Amount :"+bill;
    }
   else if (U>250 && U<400){
        bill=(U*2.5)+S;
        document.getElementById("d1").innerHTML="Bill Amount :"+bill;
    }
    else if (U>400 && U<1000){
        bill=(U*3.5)+S;
        document.getElementById("d1").innerHTML="Bill Amount :"+bill;
    }
    else if (U>1000 && U<5000){
        bill=(U*5)+S;
        document.getElementById("d1").innerHTML="Bill Amount :"+bill;
    }
    else{
        document.getElementById("d1").innerHTML="Invalid Units";
        amt1.focus();
    d1.style.color="#ff0000";
    }

}



function amount2(){
    var U=document.getElementById("amt2").value;
    var S=65;
    var bill=0.0;
    if (U>0 && U<75){
        bill=(U*3)+S;
        document.getElementById("d2").innerHTML="Bill Amount :"+bill;
    }
    else if(U>75 && U<250){
        bill=(U*4.5)+S;
        document.getElementById("d2").innerHTML="Bill Amount :"+bill;
    }
   else if (U>250 && U<400){
        bill=(U*5)+S;
        document.getElementById("d2").innerHTML="Bill Amount :"+bill;
    }
    else if (U>400 && U<1000){
        bill=(U*6.5)+S;
        document.getElementById("d2").innerHTML="Bill Amount :"+bill;
    }
    else if (U>1000 && U<5000){
        bill=(U*7)+S;
        document.getElementById("d2").innerHTML="Bill Amount :"+bill;
    }
    else{
        document.getElementById("d2").innerHTML="Invalid Units"
        amt2.focus();
        d2.style.color="#ff0000";
    }

}
function reset() {
    document.getElementById("num").value=0;
    document.getElementById("amt1").value=0;
    document.getElementById("amt2").value=0;

}