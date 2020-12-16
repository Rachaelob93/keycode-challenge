
let keyValue = document.getElementById("keyValue");
let keyCode = document.getElementById("keyCode");
let charCode = document.getElementById("charCode");

window.addEventListener("keypress", (event)=>{
    heading.innerHTML = event.charCode;
    keyValue.innerHTML = event.key;
    keyCode.innerHTML = event.code;
    charCode.innerHTML = event.keyCode;
});
