var FIRSTCARD=false,SECONDCARD=false, THIRDCARD=false;
var FORTHCARD=false, FIFTHCARD=false;
var HIDDEN=false;

//Fist Card

function FirstCardShow() {
    let helper=document.getElementById("FirstCard");
    console.log("aa");
    helper.classList.add("ScaleCard");
}
function FirstCardShowBack(){
    let helper=document.getElementById("FirstCard");
    console.log("aa");
    helper.classList.remove("ScaleCard");
    helper.classList.remove("FlipCard");
    let BackText=document.getElementById("FirstBackText");
    let row=document.getElementsByName("FirstAll");
    BackText.style.display="none";
    FIRSTCARD=false;
    setTimeout(() => {
        for(let i=0;i<row.length;i++ ){
            if(i==0){
    
               
                row[i].style.display="block";
            }else{
                row[i].style.display="block";
            }
        }  
    }, 150);

}
function FlipFirstCard(){
    let helper=document.getElementById("FirstCard");
    let row=document.getElementsByName("FirstAll");
    let BackText=document.getElementById("FirstBackText");
    if(FIRSTCARD==false){
        helper.classList.add("FlipCard");
        helper.classList.add("YellowCard");
        FIRSTCARD=true;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="none";
                }else{
                    row[i].style.display="none";
                }
            }  
            BackText.style.display="block";
        }, 150);
    }else {
        helper.classList.remove("FlipCard");
        FIRSTCARD=false;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="block";
                }else{
                    row[i].style.display="block";
                }
                BackText.style.display="none";
            }  
        }, 150);
    }

  
}

//Second 


function SecondCardShow() {
    let helper=document.getElementById("SecondCard");
    console.log("aa");
    helper.classList.add("ScaleCard");
}
function SecondCardShowBack(){
    let helper=document.getElementById("SecondCard");
    let BackText=document.getElementById("SecondBackText");
    console.log("aa");
    helper.classList.remove("ScaleCard");
    helper.classList.remove("FlipCard");
    SECONDCARD=false;
    let row=document.getElementsByName("SecondAll");
    BackText.style.display="none";
    setTimeout(() => {
        for(let i=0;i<row.length;i++ ){
            if(i==0){
    
               
                row[i].style.display="block";
            }else{
                row[i].style.display="block";
            }
        }  
 
    }, 150);
}
function FlipSecondCard(){
    let helper=document.getElementById("SecondCard");
    let row=document.getElementsByName("SecondAll");
    let BackText=document.getElementById("SecondBackText");
    if(SECONDCARD==false){
        helper.classList.add("FlipCard");
        helper.classList.add("BlackCard");
        SECONDCARD=true;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="none";
                }else{
                    row[i].style.display="none";
                }
            }  
            BackText.style.display="block";
        }, 150);
    }else {
        helper.classList.remove("FlipCard");
        SECONDCARD=false;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="block";
                }else{
                    row[i].style.display="block";
                }
            }  
            BackText.style.display="none";
        }, 150);
    }
}


//THird

function ThirdCardShow() {
    let helper=document.getElementById("ThirdCard");
    console.log("aa");
    helper.classList.add("ScaleCard");
}
function ThirdCardShowBack(){
    let helper=document.getElementById("ThirdCard");
    let BackText=document.getElementById("ThirdBackText");
    console.log("aa");
    helper.classList.remove("ScaleCard");
    helper.classList.remove("FlipCard");
    let row=document.getElementsByName("ThirdAll");
    THIRDCARD=false;
    BackText.style.display="none";
    setTimeout(() => {
        for(let i=0;i<row.length;i++ ){
            if(i==0){
    
               
                row[i].style.display="block";
            }else{
                row[i].style.display="block";
            }
        }  
    }, 150);
}
function FlipThirdCard(){
    let helper=document.getElementById("ThirdCard");
    helper.classList.add("FlipCard");
    let row=document.getElementsByName("ThirdAll");
    let BackText=document.getElementById("ThirdBackText");

    if(THIRDCARD==false){
        helper.classList.add("FlipCard");
        helper.classList.add("GreenCard");
        THIRDCARD=true;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="none";
                }else{
                    row[i].style.display="none";
                }
            }  
            BackText.style.display="block";
        }, 150);
    }else {
        helper.classList.remove("FlipCard");
        THIRDCARD=false;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="block";
                }else{
                    row[i].style.display="block";
                }
            }  
               BackText.style.display="none";
        }, 150);
    }
}

//Forth
function ForthCardShow() {
    let helper=document.getElementById("ForthCard");
    console.log("aa");
    helper.classList.add("ScaleCard");
}
function ForthCardShowBack(){
    let helper=document.getElementById("ForthCard");
    console.log("aa");
    helper.classList.remove("ScaleCard");
    helper.classList.remove("FlipCard");
    let row=document.getElementsByName("ForthAll");
    let BackText=document.getElementById("ForthBackText");
    FORTHCARD=false;
    BackText.style.display="none";
    setTimeout(() => {
        for(let i=0;i<row.length;i++ ){
            if(i==0){
    
               
                row[i].style.display="block";
            }else{
                row[i].style.display="block";
            }
        }  
    
    }, 150);
}
function FlipForthCard(){
    let helper=document.getElementById("ForthCard");
    helper.classList.add("FlipCard");
    let row=document.getElementsByName("ForthAll");

    let BackText=document.getElementById("ForthBackText");


    if(FORTHCARD==false){
        helper.classList.add("FlipCard");
        helper.classList.add("GrayCard");
        FORTHCARD=true;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="none";
                }else{
                    row[i].style.display="none";
                }
            }  
            BackText.style.display="block";
        }, 150);
    }else {
        helper.classList.remove("FlipCard");
        FORTHCARD=false;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="block";
                }else{
                    row[i].style.display="block";
                }
            }  
            BackText.style.display="none";
        }, 150);
    }

}
//
function FifthCardShow() {
    let helper=document.getElementById("FifthCard");
    console.log("aa");
    helper.classList.add("ScaleCard");
}
function FifthCardShowBack(){
    let helper=document.getElementById("FifthCard");
    console.log("aa");
    helper.classList.remove("ScaleCard");
    helper.classList.remove("FlipCard");
    let row=document.getElementsByName("FifthAll");
    let BackText=document.getElementById("FifthBackText");
    BackText.style.display='none';
    FIFTHCARD=false;
    setTimeout(() => {
        for(let i=0;i<row.length;i++ ){
            if(i==0){
    
               
                row[i].style.display="block";
            }else{
                row[i].style.display="block";
            }
        }  
    }, 150);
}
function FlipFifthCard(){
    let helper=document.getElementById("FifthCard");
    helper.classList.add("FlipCard");
    helper.classList.add("BlueCard");
    let row=document.getElementsByName("FifthAll");
    let BackText=document.getElementById("FifthBackText");
    if(FIFTHCARD==false){
        helper.classList.add("FlipCard");
        FIFTHCARD=true;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="none";
                }else{
                    row[i].style.display="none";
                }
            }  
            BackText.style.display="block";
        }, 150);
    }else {
        helper.classList.remove("FlipCard");
        FIFTHCARD=false;
        setTimeout(() => {
            for(let i=0;i<row.length;i++ ){
                if(i==0){
                    row[i].style.display="block";
                }else{
                    row[i].style.display="block";
                }
            }  
            BackText.style.display='none';
        }, 150);
    }
}

function MoveSlider() {

    var helper=document.getElementById("Slider1");
    let arrowLeft=document.getElementById("LeftArrow");
    let arrowRight=document.getElementById("RightArrow");
    if(HIDDEN==true) {
        helper.style.left="-70%";
        helper.style.transitionDuration="700ms";
        arrowLeft.style.display="none";
        arrowRight.style.display="block";
        HIDDEN=false;
    }else {
        helper.style.left="0%";
        helper.style.transitionDuration="500ms";
        arrowRight.style.display="none";
        arrowLeft.style.display="block";
        HIDDEN=true;
    }
}