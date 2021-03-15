const form = document.querySelector (".form_container");

const fullName = document.querySelector ("#full_name");
const fullNameError = document.querySelector(".name_error");

const address = document.querySelector ("#address");
const addressError = document.querySelector (".address_error");

const city = document.querySelector ("#city")
const cityError = document.querySelector (".city_error")

const zipCode = document.querySelector ("#zipcode")
const zipCodeError = document.querySelector (".zip_error")

const country = document.querySelector ("#country")
const CountryError = document.querySelector (".country_error")

const cardNumber = document.querySelector ("#card_number")
const cardNumberError = document.querySelector (".cardNumber_error")

const cardHolder = document.querySelector ("#card_holder")
const cardHolderError = document.querySelector (".cardName_error")

const expireDate = document.querySelector ("#expire_date")
const expireError = document.querySelector (".expireDate_error")

const cvv = document.querySelector ("#cvv")
const cvvError = document.querySelector ("cvv_error")


function validateCheck(event){
    event.preventDefault();

    if(fullName.value.trim().length > 0){
        fullNameError.style.display = "none"
    } else {
        fullNameError.style.display = "block"
    }

    if(address.value.trim().length > 2){
        addressError.style.display = "none"
    } else {
        addressError.style.display = "block"
    }

    if(city.value.trim().length > 2){
        cityError.style.display = "none"
    } else {
        cityError.style.display = "block"
    }

    if(zipCode.value.trim().length > 2){
        zipCodeError.style.display = "none"
    } else {
        zipCodeError.style.display = "block"
    }

    if(country.value.trim().length > 0){
        CountryError.style.display = "none"
    } else {
        CountryError.style.display = "block"
    }

    if(cardNumber.value.trim().length > 0){
        cardNumberError.style.display = "none"
    } else {
        cardNumberError.style.display = "block"
    }
    
    if(cardHolder.value.trim().length > 0){
        cardHolderError.style.display = "none"
    } else {
        cardHolderError.style.display = "block"
    }

    if(expireDate.value.trim().length > 0){
        expireError.style.display = "none"
    } else {
        expireError.style.display = "block"
    }

    if(cvv.value.trim().length > 0){
        cvvError.style.display = "none"
    } else {
        cvvError.style.display = "block"
    } 

}



form.addEventListener("submit", validateCheck);


function emailValidate(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailPattern = regEx.test(email);
    return emailPattern;
}

/*
function addressValidate(address){
    const addressRegEx = ^[a-zA-Z0-9\s,'-]*$
    const addressPattern = RegExp.test(address)
}
*/