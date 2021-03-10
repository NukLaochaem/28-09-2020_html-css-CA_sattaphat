const addToBag = document.querySelector (".ADDTOBAG_BTN");
const succes_msg = document.querySelector (".succes_msg")

addToBag.addEventListener("click", message);

function message(){
    succes_msg.innerHTML.style.display = "block";
}
console.log()