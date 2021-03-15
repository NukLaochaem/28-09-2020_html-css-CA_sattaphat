const addToBag = document.querySelector (".ADDTOBAG_BTN");
const succesMsg = document.querySelector (".succes_msg")

addToBag.addEventListener("click", message);

function message(event){
    succesMsg.style.display = "block";
}


const cross = document.querySelector (".cross");

cross.addEventListener("click", closeMsg);

function closeMsg(event){
    succesMsg.style.display = "none";
}
