let photoMobileSize = document.getElementById("mobilePhoto");
let photoBigSize = document.getElementById("bigPhoto");
let photoMobileSizeBox = document.getElementById("menuTextHolderHelper");

/*Place menu Text  */
function FocusPostMenu() {
    let helper = document.getElementById("menuTablet");
    let element = document.getElementById("menuHolderSelectTablet");
    console.log("distance"+element.getBoundingClientRect().right);

    if (window.screen.width<520) {
        helper.style.marginLeft = "2.5%";
        helper.style.marginTop = "28px";
        helper.style.width = "95%";
        helper.style.left = "0";
    }else if(window.screen.width>520 && window.screen.width<650) {
        helper.style.marginLeft = "0";
        helper.style.left = element.getBoundingClientRect().right-240 + "px";
        helper.style.marginTop = "0px";
        helper.style.width = "240px";
    }else {
        helper.style.left = element.getBoundingClientRect().right-280 + "px";
        helper.style.marginTop = "0px";
        helper.style.width = "280px";
        helper.style.marginLeft = "0";
    }
}

function ReplaceSize(){
    let helper = Number(photoMobileSize.clientHeight)-200;

    FocusPostMenu();

    if(window.screen.width <= 600) {
        console.log("aa");
        helper+=80;
    }
    photoMobileSizeBox.style.height = helper+"px";
    
    changeMenuSize();
    console.log("is "+Number(photoMobileSize.clientHeight));
}

setTimeout(ReplaceSize,100);

function changeMenuSize() {
    let helper = Number(photoBigSize.clientHeight);
    let mobile = Number(photoMobileSize.clientHeight);
    if(Number(photoBigSize.clientWidth)>990) {
        document.getElementById("menuHolder").style.height = helper+"px";
        console.log("aa");
    }else if (Number(photoMobileSize.clientWidth<=990 && Number(photoMobileSize.clientWidth>768))){
        mobile-=200;
        document.getElementById("menuHolder").style.height = mobile+"px";
    }else if(Number(photoMobileSize.clientWidth<=768 && Number(photoMobileSize.clientWidth>600))) {
        mobile-=200;
        document.getElementById("menuHolder").style.height = mobile+"px";
    }else if(Number(photoMobileSize.clientWidth<=600)){
        mobile-=120;
        document.getElementById("menuHolder").style.height = mobile+"px";
    }

}
