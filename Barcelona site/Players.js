var PLAYERS="3px";

function ChangeBusguet1(){
    console.log("aa");
    let helper=document.getElementsByName("Busquet");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-905px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1345px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 3:
                helper[i].style.top="-1675px";
                helper[i].style.transitionDuration="450ms";
        }
        
    }
}
function ChangeBusguet2(){
    console.log("aa");
    let helper=document.getElementsByName("Busquet");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-835px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1255px";
                helper[i].style.transitionDuration="450ms";
                break;
             case 3:
                helper[i].style.top="-1577px";
                helper[i].style.transitionDuration="450ms";
           
        }
        
    }
}

function ChangeStegenTextUp(){
    console.log("aa");
    let helper=document.getElementsByName("Stegen");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-905px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1345px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 3:
                helper[i].style.top="-1675px";
                helper[i].style.transitionDuration="450ms";
        }
        
    }
}
function ChangeStegenTextDown(){
    console.log("aa");
    let helper=document.getElementsByName("Stegen");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-835px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1255px";
                helper[i].style.transitionDuration="450ms";
                break;
             case 3:
                helper[i].style.top="-1577px";
                helper[i].style.transitionDuration="450ms";
           
        }
        
    }
}


function ChangePiqueTextUp(){
    console.log("aa");
    let helper=document.getElementsByName("Pique");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-905px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1345px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 3:
                helper[i].style.top="-1675px";
                helper[i].style.transitionDuration="450ms";
        }
        
    }
}

function ChangePiqueTextDown(){
    console.log("aa");
    let helper=document.getElementsByName("Pique");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-835px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1255px";
                helper[i].style.transitionDuration="450ms";
                break;
             case 3:
                helper[i].style.top="-1577px";
                helper[i].style.transitionDuration="450ms";
           
        }
        
    }
}


function CahngePedriTextUp(){
    console.log("aa");
    let helper=document.getElementsByName("Pedri");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-905px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1345px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 3:
                helper[i].style.top="-1675px";
                helper[i].style.transitionDuration="450ms";
        }
        
    }
}

function ChangePedriTextDown(){
    console.log("aa");
    let helper=document.getElementsByName("Pedri");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-835px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1255px";
                helper[i].style.transitionDuration="450ms";
                break;
             case 3:
                helper[i].style.top="-1577px";
                helper[i].style.transitionDuration="450ms";
           
        }
        
    }
}

function CahngedejongTextUp(){
    console.log("aa");
    let helper=document.getElementsByName("dejong");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-905px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1345px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 3:
                helper[i].style.top="-1675px";
                helper[i].style.transitionDuration="450ms";
        }
        
    }
}


function ChangedejongTextDown(){
    console.log("aa");
    let helper=document.getElementsByName("dejong");
    for(let i=0;i<helper.length;i++){
        switch(i+1){
            case 1:
                helper[i].style.top="-835px";
                helper[i].style.transitionDuration="450ms";
                break;
            case 2:
                helper[i].style.top="-1255px";
                helper[i].style.transitionDuration="450ms";
                break;
             case 3:
                helper[i].style.top="-1577px";
                helper[i].style.transitionDuration="450ms";
           
        }
        
    }
}

function MovPlayers(value){
    if( value==0){
        document.getElementById("players").style.left="3px"; 
        document.getElementById("players").style.transitionDuration="350ms"
        document.getElementById("sideLeft").classList.add("active");  

        document.getElementById("sideRight").classList.remove("active");
        document.getElementById("leftMOve").classList.add("clicked")
        document.getElementById("rightMove").classList.remove("clicked");
    }else{
        document.getElementById("players").style.left="-852px";   
        document.getElementById("players").style.transitionDuration="350ms"; 
        document.getElementById("sideRight").classList.add("active"); 
        document.getElementById("sideLeft").classList.remove("active");
        document.getElementById("rightMove").classList.add("clicked")
        document.getElementById("leftMOve").classList.remove("clicked");
    }
}

function CheckLeft(){
    let helper=document.getElementById("players");
    let row="";

    for(let i=0;i<helper.style.left.length-2;i++){
        row+=helper.style.left[i];
    }
    console.log(Number(row));
    if(Number(row)<=-423){
        PLAYERS=Number(row)+428+"px";
        helper.style.left=PLAYERS;
        helper.style.transitionDuration="350ms";
        document.getElementById("rightMove").classList.remove("clicked")
       
    }
    for(let i=0;i<helper.style.left.length-2;i++){
        row+=helper.style.left[i];
    }
    console.log(Number(row));
    if(Number(row)== -4253 || Number(row)==-4244) {
  
      document.getElementById("leftMOve").classList.add("clicked")
    }
}

function CheckRight(){
    let helper=document.getElementById("players");
    let row="";

    for(let i=0;i<helper.style.left.length-2;i++){
        row+=helper.style.left[i];
    }
    console.log(Number(row));
    if(Number(row)>-851){
        PLAYERS=Number(row)-428;
        PLAYERS+="px";
        helper.style.left=PLAYERS;
        helper.style.transitionDuration="350ms";
        document.getElementById("leftMOve").classList.remove("clicked");
    }
    for(let i=0;i<helper.style.left.length-2;i++){
        row+=helper.style.left[i];
    }
    console.log(row);
    if(row=="-425-853"|| row=="-424-852" ) {
      document.getElementById("rightMove").classList.add("clicked")
    }
}