window.onscroll = function() {
    scrollTo();
    console.log("asd" + document.getElementById("photoID").style.backgroundSize);
}


function scrollTo() {
    let btn = document.getElementById("btnID");
    console.log("aa");
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop >400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function MoveTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

console.log("asd" + document.getElementById("photoID").style.backgroundSize.height);