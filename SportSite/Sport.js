CLICKED=false;
BUTTONMENUCLICKED = false;

function ChangeSearchColor () {
    let search=document.getElementById("SearchSpace");
    let searchInput=document.getElementById("inputSearch");
    let colorPhoto=document.getElementById("PhotoColor");

    colorPhoto.style.color="black";
    search.classList.remove("SearchDiv");
    search.classList.add("SearchDiv-Active");
    searchInput.style.color="black";
}
function ChangeSearchColorBack () {
    let search=document.getElementById("SearchSpace");
    let searchInput=document.getElementById("inputSearch");
    let colorPhoto=document.getElementById("PhotoColor");

    search.classList.add("SearchDiv");
    search.classList.remove("SearchDiv-Active");
    searchInput.style.color="rgb(201, 197, 197)";
    colorPhoto.style.color="rgb(201, 197, 197)";
}

function DisplayMenu (){
    let menu = document.getElementById("MenuMobileID");
    let menuLogo = document.getElementById ( "MenuPhoneLogo");
    if(BUTTONMENUCLICKED == false) {
        menu.style.display = "block";
        menuLogo.style.backgroundColor = "rgb(190,10,10)"; 
        BUTTONMENUCLICKED = true;
    } else {
        menu.style.display = "none";
        BUTTONMENUCLICKED = false;
        menuLogo.style.backgroundColor = "transparent"; 
    }
}