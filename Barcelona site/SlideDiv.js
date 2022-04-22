function SecondSlider(){
    var butten2;
    var row=document.getElementsByName("ButtonName");
    for(let helper of row){
        helper.style.backgroundColor="Gray";
    }
    butten2=document.getElementById("SecondButton").style.backgroundColor="Red";
    document.getElementById("SliderD").style.left="-51.1%";
    document.getElementById("SliderD").style.transitionDuration="400ms";
    console.log(document.getElementById("SliderD"));
}
function ThirdSlider(){
    var butten3;
    var row=document.getElementsByName("ButtonName");
    for(let helper of row){
        helper.style.backgroundColor="Gray";
    }
    butten3=document.getElementById("ThirdButton").style.backgroundColor="Red";
    document.getElementById("SliderD").style.left="-104%";
    document.getElementById("SliderD").style.transitionDuration="400ms";
    console.log(document.getElementById("SliderD"));
}
function FirstSlider(){
    var butten1;
    var row=document.getElementsByName("ButtonName");
    for(let helper of row){
        helper.style.backgroundColor="Gray";
    }
    butten1=document.getElementById("FirstButton").style.backgroundColor="Red";
    document.getElementById("SliderD").style.left="0%";
    console.log(document.getElementById("SliderD"));
    document.getElementById("SliderD").style.transitionDuration="400ms";
}

var time=new Date();
var numberHour=Math.floor((Math.random()*10)-2);
var timeOld=Number(60000*60*numberHour);

var result="";

setInterval(() => {
    timeOld-=1000;
    var timeDate=new Date(timeOld);
    result="00 : 0"+timeDate.getHours()+" : "+timeDate.getMinutes();
    if(timeDate.getSeconds()<10){
        result+=" : 0"+timeDate.getSeconds();
    }else{
        result+=" : "+timeDate.getSeconds();
    }
    document.getElementById("timeText").innerHTML=result;
}, 1000);

function pushBarca1(){
    let helper=document.getElementById("Barsa1");
    helper.style.top="1px";
    helper.style.transitionDuration="100ms";
}
function pushBarca11(){
    let helper=document.getElementById("Barsa1");
    helper.style.top="0px";
    helper.style.transitionDuration="100ms";
}

function pushBarca2(){
    let helper=document.getElementById("Barsa2");
    helper.style.top="1px";
    helper.style.transitionDuration="100ms";
}
function pushBarca22(){
    var helper=document.getElementById("Barsa2");
    helper.style.top="0px";
    helper.style.transitionDuration="100ms";
}

function pushBarca3(){
    let helper=document.getElementById("Barsa3");
    helper.style.top="1px";
    helper.style.transitionDuration="100ms";
}
function pushBarca33(){
    var helper=document.getElementById("Barsa3");
    helper.style.top="0px";
    helper.style.transitionDuration="100ms";
}
function pushBarca4(){
    let helper=document.getElementById("Barsa4");
    helper.style.top="1px";
    helper.style.transitionDuration="100ms";
}
function pushBarca44(){
    var helper=document.getElementById("Barsa4");
    helper.style.top="0px";
    helper.style.transitionDuration="100ms";
}