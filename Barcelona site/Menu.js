function RedBShow(){
    let row=document.getElementsByName("RedDiv");
    let row2=document.getElementsByName("BlueDiv");
    for( let helper of row){
        helper.classList.add("colorRedEffect");
    }
    for( let helper2 of row2){
        helper2.classList.add("colorBlueEffect");
    }
}
function RedBShowN(){
    let row=document.getElementsByName("RedDiv");
    let row2=document.getElementsByName("BlueDiv");
    for( let helper of row){
        helper.classList.remove("colorRedEffect");
       
    }
    for( let helper2 of row2){
        helper2.classList.remove("colorBlueEffect");
       
    }
}


function ColorUp(helper,helper2,helper4){
    let helperNew=helper;
    let helperNew2=helper2;
    let pom;
    let menulist="menuList"+helper4;
    let Heis=document.getElementById(menulist);

    if(helper4==6){
        document.getElementById("menuList6").style.display="block";

    }else{
    if(helper4!=3){
        Heis.style.display="block";
        if(helper4==4){
            Heis.style.height="175px";
        }else{
            Heis.style.height="272px";
        }
        if(helper4==5){
            Heis.style.height="410px";
        }
        Heis.style.transitionDuration="350ms";
    }
    }

    let row=document.getElementsByName("ColorIt");
    for(let helper3 of row){
        helper3.classList.add("WhiteIt");
    }
    for(let i=0;i<row.length;i++){
         pom=row[i];
         if(i==helperNew || i== helperNew2){
             pom.classList.remove("WhiteIt");
         }
        
    }
    
    
}
function ColorUpDown(backIt){
    let row=document.getElementsByName("ColorIt");
    let menulist="menuList"+backIt;
    if(backIt==6){
        document.getElementById(menulist).style.display="none";

    }
    if(backIt!=3){
        if(backIt==6){

        }else{
              document.getElementById(menulist).style.display="none";
        }
    }
    for( let helper3 of row){
        helper3.classList.remove("WhiteIt");
    }

}
