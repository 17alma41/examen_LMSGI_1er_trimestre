let clickCount = 0;
let sumaClick = 1; 

function clickButton(){
    clickCount += sumaClick;
    if(clickCount === 1){
        const textChangeP = "Has pulsado el botón!"
        const changeP = document.querySelector("#changetext")
        changeP.innerHTML = textChangeP;
    }
    if(clickCount === 2){
        const textChangeP = "Has pulsado el botón por segunda vez!"
        const changeP = document.querySelector("#changetext")
        changeP.innerHTML = textChangeP;
    }
    if(clickCount === 3){
        const element = document.getElementById("section3");
        const fontcolor = document.getElementById("changetext")
        const textChangeP = "Has pulsado el botón por tercera vez!"
        const changeP = document.querySelector("#changetext")

        changeP.innerHTML = textChangeP;
        element.style.background = "black";
        fontcolor.style.color = "white";
    }
    if(clickCount === 4){
        const element = document.getElementById("section3");
        const fontcolor = document.getElementById("changetext")
        const textChangeP = "Pulsa el botón"
        const changeP = document.querySelector("#changetext")

        changeP.innerHTML = textChangeP;
        element.style.background = "antiquewhite";
        fontcolor.style.color = "black";
        clickCount = 0;
    }
}
