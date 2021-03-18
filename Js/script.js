const addToBag = document.querySelector (".addToBag_itemPage");
const succesMsg = document.querySelector (".succes_msg")


// 'add to bag' pop up and close Item page
addToBag.addEventListener("click", message);
function message(event){
    succesMsg.style.display = "block";
    
}

const cross_cart = document.querySelector (".cross_cart");
cross_cart.addEventListener("click", closeMsg);

function closeMsg(event){
    succesMsg.style.display = "none";
}



// 'add to favorite' pop up and close Item page

const favorite = document.querySelector (".item_heart")
const favoriteMsg = document.querySelector (".favorite_msg")
const cross_favorite = document.querySelector (".cross_favorite");

favorite.addEventListener("click", favoriteMeassge)
function favoriteMeassge(event){
    favoriteMsg.style.display = "block";
}


cross_favorite.addEventListener("click", closeFavorite);
function closeFavorite(event){
    favoriteMsg.style.display = "none";
}

// 'add to bag' on favorite page

const popUp = document.querySelector (".pop_up")
const addToBagFavorite = document.querySelector (".addtobag_btn")
const closingPopUp = document.querySelector (".close_popup_cross")

addToBagFavorite.addEventListener("click", showPopUp);

function showPopUp(event){
    popUp.style.display = "block"
}

closingPopUp.addEventListener("click", closePopUp);

function closePopUp(event){
    popUp.style.display = "none";
}