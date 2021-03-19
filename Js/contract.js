const contactNames = document.querySelector("#name")
const nameError = document.querySelector (".contact_name_error")
const contactEmail = document.querySelector("#email")
const emailError = document.querySelector(".contact_email_error")
const contactMessage = document.querySelector("#message")
const messageError = document.querySelector(".contact_message_error")

const form = document.querySelector (".contact_form")


function validateContact (event){
    event.preventDefault();

    if(contactNames.value.trim().length > 1){
        nameError.style.display = "none";
    } else{
        nameError.style.display = "block";
    }

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block"
    }

    if(contactMessage.value.trim().length > 9){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block"
    }
}

form.addEventListener("submit", validateContact);

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailPattern = regEx.test(email);
    return emailPattern;
}










const sent = document.querySelector (".message_sent")
const checkMark = document.querySelector (".check_mark")
const sumbit = document.querySelector ("#submit")



