const contactNames = document.querySelector("#name")
const nameError = document.querySelector (".contact_name_error")
const contactEmail = document.querySelector("#email")
const emailError = document.querySelector(".contact_email_error")
const contactMessage = document.querySelector("#message")
const messageError = document.querySelector(".contact_message_error")

const form = document.querySelector (".contact_form")
const messageSent = document.querySelector (".message_sent")
const closeMsg = document.querySelector (".check_mark")


function validateContact (event){
    event.preventDefault();

    if(checkLength(contactNames.value, 0) === true) {
        nameError.style.display = "none";
    } else{
        nameError.style.display = "inline";
        return;
    }

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "inline";
        return;
    }

    if(checkLength(contactMessage.value, 9) === true){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "inline";
        return;
    }
    feedBack();
}

form.addEventListener("submit", validateContact);

function feedBack(){
    messageSent.style.display = "block"
    form.reset();
}
closeMsg.addEventListener("click", closeSentMsg);
function closeSentMsg(){
    messageSent.style.display =  "none"
}




function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false;
    }
}


function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailPattern = regEx.test(email);
    return emailPattern;
}



const sent = document.querySelector (".message_sent")
const checkMark = document.querySelector (".check_mark")
const sumbit = document.querySelector ("#submit")



