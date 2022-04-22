var root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let models = document.getElementById("models");
let bodyT = document.getElementById("bodytps");
let paginationHolder = document.getElementById("models__pagination-containerID");
let paginationHolderType = document.getElementById("models__pagination-type-containerID")
let focusmenu = document.getElementById("menuFocusnav");
let focusmenuType = document.getElementById("menuFocusType");
let modelsCars = document.getElementsByClassName("cars-store__model-container");
let movement = -40;
let movementFocus = 45;

ModelsClick();
function ModelsClick() {
    let helper = document.getElementById("menuFocus");
    models.classList.add("models__nav-menu-active");
    bodyT.classList.remove("models__nav-menu-active");
    helper.style.marginLeft = "0";
    helper.style.transitionDuration ="300ms";
    root.style.setProperty("--widthFocus","115px");
    paginationHolder.style.display = "block";
    paginationHolderType.style.display = "none";
    focusmenu.style.display = "block";
    focusmenuType.style.display = "none";
    root.style.setProperty("--widthFocusPagination","50px");
    root.style.setProperty("--focusMargin","579px");
    ShowModels("i");
}
function bodyClick() {
    let helper = document.getElementById("menuFocus");
    bodyT.classList.add("models__nav-menu-active");
    models.classList.remove("models__nav-menu-active");
    helper.style.marginLeft = "117px";
    helper.style.transitionDuration ="300ms";
    root.style.setProperty("--widthFocus","135px");
    paginationHolder.style.display = "none";
    paginationHolderType.style.display = "block";
    focusmenu.style.display = "none";
    focusmenuType.style.display = "block";
    root.style.setProperty("--widthFocusPaginationType","110px");
    root.style.setProperty("--focusMarginType","0px");
    ShowModelsType("saloon");
}

function focusPaginationMove(helper) {
    var menuId = document.getElementById("menuID");
    var focusID = document.getElementById("menuFocusnav");
    if(window.innerWidth < 402) {
        switch(helper) {
            case "all": root.style.setProperty("--widthFocusPagination","73px");
                        root.style.setProperty("--focusMargin","0px");
            break;
            case "1":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","70px");
                        ShowModels("1");
                        menuId.style.left = "5px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "2":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","120px");
                        ShowModels("2");
                        menuId.style.left = "5px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "3":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","125px");
                        menuId.style.left = movement+"px";
                        menuId.style.transitionDuration="300ms";
                        ShowModels("3");
                        break; 
            case "4":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","135px");
                        ShowModels("4");
                        menuId.style.left = movement*2+"px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "5":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","145px");
                        ShowModels("5");
                        menuId.style.left = movement*3+"px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "7":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","155px");
                        ShowModels("7");
                        menuId.style.left = movement*4+"px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "8":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","165px");
                        ShowModels("8");
                        menuId.style.left = movement*5+"px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "X":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","176px");
                        ShowModels("X");
                        menuId.style.left = movement*6+"px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "Z":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","186px");
                        ShowModels("Z");
                        menuId.style.left = movement*7+"px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "M":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","150px");
                        menuId.style.left = movement*9.3+"px";
                        menuId.style.transitionDuration="300ms";
                        ShowModels("M");
                        break; 
            case "i":   root.style.setProperty("--widthFocusPagination","50px");
                        root.style.setProperty("--focusMargin","200px");
                        ShowModels("i");
                        menuId.style.left = movement*9.3+"px";
                        menuId.style.transitionDuration="300ms";
                        break; 
            case "prev":  root.style.setProperty("--widthFocusPagination","73px");
                        root.style.setProperty("--focusMargin","250.5px");
                        ShowModels("prev");
                        menuId.style.left = movement*9.4+"px";
                        menuId.style.transitionDuration="300ms";
                        break; 
    
        }
    }else {
         switch(helper) {
              case "all": root.style.setProperty("--widthFocusPagination","73px");
                          root.style.setProperty("--focusMargin","0px");
                          break;
              case "1":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","70px");
                          ShowModels("1");
                          break; 
              case "2":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","120px");
                          ShowModels("2");
                          break; 
              case "3":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","170px");
                          ShowModels("3");
                          break; 
              case "4":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","220px");
                          ShowModels("4");
                          break; 
              case "5":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","270px");
                          ShowModels("5");
                          break; 
              case "7":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","322px");
                          ShowModels("7");
                          break; 
              case "8":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","372px");
                          ShowModels("8");
                          break; 
              case "X":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","422px");
                          ShowModels("X");
                          break; 
              case "Z":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","474px");
                          ShowModels("Z");
                          break; 
              case "M":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","528px");
                          ShowModels("M");
                          break; 
              case "i":   root.style.setProperty("--widthFocusPagination","50px");
                          root.style.setProperty("--focusMargin","579px");
                          ShowModels("i");
                          break; 
              case "prev":  root.style.setProperty("--widthFocusPagination","73px");
                          root.style.setProperty("--focusMargin","631.5px");
                          ShowModels("prev");
                          break; 

             }
    }
}
function focusPaginationMoveType(helper) {
    switch(helper) {
        case "saloon": root.style.setProperty("--widthFocusPaginationType","110px");
                    root.style.setProperty("--focusMarginType","0px");
                    ShowModelsType("saloon");
                    break;
        case "touring":   root.style.setProperty("--widthFocusPaginationType","110px");
                    root.style.setProperty("--focusMarginType","107px");
                    ShowModelsType("touring");
                    break; 
        case "convertible":   root.style.setProperty("--widthFocusPaginationType","135px");
                    root.style.setProperty("--focusMarginType","220px");
                    ShowModelsType("convertible");
                    break; 
        case "coupe":   root.style.setProperty("--widthFocusPaginationType","95px");
                    root.style.setProperty("--focusMarginType","362.5px");
                    ShowModelsType("coupe");
                    break; 
        case "roodster":   root.style.setProperty("--widthFocusPaginationType","110px");
                    root.style.setProperty("--focusMarginType","463px");
                    ShowModelsType("roodster");
                    break; 
        case "sportActivityCoupe":   root.style.setProperty("--widthFocusPaginationType","215px");
                    root.style.setProperty("--focusMarginType","580px");
                    ShowModelsType("sportActivityCoupe");
                    break; 
        case "sportActivityVehicle":   root.style.setProperty("--widthFocusPaginationType","215px");
                    root.style.setProperty("--focusMarginType","803px");
                    ShowModelsType("sportActivityVehicle");
                    break; 
        case "hatch":   root.style.setProperty("--widthFocusPaginationType","84px");
                    root.style.setProperty("--focusMarginType","1028px");
                    ShowModelsType("hatch");
                    break; 
        case "Tourer":   root.style.setProperty("--widthFocusPaginationType","90px");
                    root.style.setProperty("--focusMarginType","1123px");
                    ShowModelsType("Tourer");
                    break; 
        case "BMWi":   root.style.setProperty("--widthFocusPaginationType","50px");
                    root.style.setProperty("--focusMarginType","474px");
                    break; 

    }
}


function  ShowModels(helper) {
    var modelsSelect;
    switch(helper) {
        case "all": root.style.setProperty("--widthFocusPagination","73px");
                    root.style.setProperty("--focusMargin","0px");
                    break;
        case "1":   modelsSelect = document.getElementsByClassName("model-series1");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "2":   modelsSelect = document.getElementsByClassName("model-series2");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "3":   modelsSelect = document.getElementsByClassName("model-series3");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "4":   modelsSelect = document.getElementsByClassName("model-series4");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "5":   modelsSelect = document.getElementsByClassName("model-series5");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "7":   modelsSelect = document.getElementsByClassName("model-series7");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "8":   modelsSelect = document.getElementsByClassName("model-series8");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "X":   modelsSelect = document.getElementsByClassName("model-seriesX");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "Z":   modelsSelect = document.getElementsByClassName("model-seriesZ4-roodster");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "M":   modelsSelect = document.getElementsByClassName("model-seriesM");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "i":   modelsSelect = document.getElementsByClassName("electric");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "prev":  modelsSelect = document.getElementsByClassName("hybrid");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
    }
}
function  ShowModelsType(helper) {
    var modelsSelectType;
    switch(helper) {
        case "saloon": modelsSelectType = document.getElementsByClassName("model-saloon");
                    ChangeModelsDisplay(modelsSelectType);
                    break;
        case "touring":   modelsSelect = document.getElementsByClassName("model-touring");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "convertible":   modelsSelect = document.getElementsByClassName("model-convertible");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "coupe":   modelsSelect = document.getElementsByClassName("model-coupe");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "roodster":   modelsSelect = document.getElementsByClassName("model-seriesZ4-roodster");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "sportActivityCoupe":   modelsSelect = document.getElementsByClassName("model-sport-activities-coupe");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "sportActivityVehicle":   modelsSelect = document.getElementsByClassName("model-sport-activities-vehicle");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "hatch":   modelsSelect = document.getElementsByClassName("hatch");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "Tourer":   modelsSelect = document.getElementsByClassName("tourer");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "Z":   modelsSelect = document.getElementsByClassName("model-seriesZ4-roodster");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "M":   modelsSelect = document.getElementsByClassName("model-seriesM");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "i":   modelsSelect = document.getElementsByClassName("electric");
                    ChangeModelsDisplay(modelsSelect);
                    break; 
        case "prev":  root.style.setProperty("--widthFocusPagination","73px");
                    root.style.setProperty("--focusMargin","631.5px");
                    break; 
    }
}
function ChangeModelsDisplay(helper) {
    for(let i =0 ;i<modelsCars.length;i ++) {
        modelsCars[i].style.opacity ="0";
        modelsCars[i].style.transitionDuration = "300ms";
        setTimeout(function () {
            modelsCars[i].style.display = "none";
        },300)
   
    }

    setTimeout(function() {
        for(let y = 0 ;y<helper.length ;y ++) {
            helper[y].style.opacity = "1";
            helper[y].style.display = "inline-block";
            console.log(helper);
        }
    }
    ,300);
}