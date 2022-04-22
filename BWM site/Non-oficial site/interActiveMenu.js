let show = false;
let entered = false;

let showTablet = false;
let enteredTablet = false;

FocusPostMenu();
function postmenu() {
    let menu = document.getElementById("menu");
    let selectEl = document.getElementById("menuHolderSelect");
    if(show!=true) {
        menu.style.display = "block";
        show= true;
        selectEl.classList.add("select-border-hover");
    }else {
        if(entered == false) {
            menu.style.display = "none";
            show= false;
            entered =false;
            selectEl.classList.remove("select-border-hover");
        }
    }
}
function CloseMenu() {
      postmenu();
}

function MenuEntered() {
    entered = true;
    console.log('in');
}
function MenuExi() {
    entered = false;

}
function ChangePriority() {
    menuFocusActive = false;
}

function Pick(helper) {
    let text = document.getElementById("selectText");
    text.innerHTML = helper.innerText;

    setAllToDefault();
    helper.classList.add("select-item-border");
    entered = false;
    CloseMenu();

}

function setAllToDefault() {
    let row = document.getElementsByClassName("select-item");
    let defualtOn = document.getElementsByClassName("select-item-default");
    for(let y = 0 ;y<defualtOn.length; y ++){
        defualtOn[y].classList.remove("select-item-default");
    }
    for(let i = 0 ;i <row.length; i ++ ) {
        row[i].classList.remove("select-item-border");
    }

}


//Tablet 

function postmenuTablet() {
    let menu = document.getElementById("menuTablet");
    let selectEl = document.getElementById("menuHolderSelectTablet");

    if(showTablet!=true) {
        menu.style.display = "block";
        showTablet= true;
        selectEl.classList.add("select-border-hover");
    }else {
        if(enteredTablet == false) {
            menu.style.display = "none";
            showTablet= false;
            enteredTablet =false;
            selectEl.classList.remove("select-border-hover");
        }
    }
}
function CloseMenuTablet() {
      postmenuTablet();
}

function MenuEnteredTablet() {
    enteredTablet = true;
    console.log('in');
}
function MenuExiTablet() {
    enteredTablet = false;

}
function ChangePriorityTablet() {
    menuFocusActiveTablet = false;
}

function PickTablet(helper) {
    let text = document.getElementById("selectTextTablet");
    text.innerHTML = helper.innerText;

    setAllToDefaultTablet();
    helper.classList.add("select-item-border");
    enteredTablet = false;
    CloseMenuTablet();

}

function setAllToDefaultTablet() {
    let row = document.getElementsByClassName("select-item");
    let defualtOn = document.getElementsByClassName("select-item-defaultTablet");
    for(let y = 0 ;y<defualtOn.length; y ++){
        defualtOn[y].classList.remove("select-item-defaultTablet");
    }
    for(let i = 0 ;i <row.length; i ++ ) {
        row[i].classList.remove("select-item-border");
    }

}