var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right,"+ color1.value +","+ color2.value +")";
    css.textContent = body.style.background + " ; ";
}

// color1.addEventListener("input",function(){
//     body.style.background = "linear-gradient(to right,"+ color1.value +","+ color2.value +")";
// })

// color2.addEventListener("input",function(){
//     body.style.background = "linear-gradient(to right,"+ color1.value +","+ color2.value +")";
// })

// OR

color1.addEventListener("input",setGradient); // Note : here we are not using setGradient() as we need to pass only the reference
color2.addEventListener("input",setGradient);

// we could have also add js to html by doing <input oninput="setGradient"> 