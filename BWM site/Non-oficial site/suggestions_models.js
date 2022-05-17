function  suggestedModelsRight(activedot) {
    let slider = document.getElementById("suggestion-modelsID");
    
    slider.classList.remove("suggestions-models-body__holderLeft");
    slider.classList.add("suggestions-models-body__holderRight");
    slider.classList.remove("suggestions-models-body__holderCenter");
    updateDots(activedot);
}

function  suggestedModelsLeft(activedot) {
    let slider = document.getElementById("suggestion-modelsID");
    
    slider.classList.remove("suggestions-models-body__holderRight");
    slider.classList.add("suggestions-models-body__holderLeft");
    slider.classList.remove("suggestions-models-body__holderCenter");
    updateDots(activedot);
}

function  suggestedModelsCenter(activedot) {
    let slider = document.getElementById("suggestion-modelsID");
    
    slider.classList.remove("suggestions-models-body__holderLeft");
    slider.classList.remove("suggestions-models-body__holderRight");
    slider.classList.add("suggestions-models-body__holderCenter");
    updateDots(activedot);
}

function updateDots(activedot) {
    let dots = document.getElementsByClassName("dot");
    for(let i= 0 ;i <dots.length; i++ ){
        dots[i].classList.remove("active-dot");
    }
    activedot.classList.add("active-dot");
}