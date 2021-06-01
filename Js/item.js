const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const getJacketID = params.get("id")

const corsFix = "https://noroffcors.herokuapp.com/";
const IdUrl = "http://nuklaochaem.one/Rainydays/wp-json/wc/store/products/"+ getJacketID;
const jacketUrl = corsFix + IdUrl;

console.log(jacketUrl)

const itemContainer = document.querySelector(".item_container")
const modelItem = document.querySelector(".model_item")
const itemDetails = document.querySelector(".item_description_container")
const loader = document.querySelector(".middel_container")

const rainjacket = document.querySelector(".rainjacket_details")
const itemName = document.querySelector(".red_rain_jacket")
const itemPrice = document.querySelector(".red_rain_jacket_price")
const textDetails = document.querySelector(".text_details")


async function callApi(){
    try{
        const response = await fetch(jacketUrl)
        const bestSellerItem = await response.json(response)

        console.log(bestSellerItem);
        loader.innerHTML = "";
        
        modelItem.innerHTML += `<img class="bestSellerJacket" src="${bestSellerItem.images[0].src}" alt="${bestSellerItem.name}">`
        itemName.innerHTML += `${bestSellerItem.name}`;
        itemDetails.innerHTML += `${bestSellerItem.description}`;
        rainjacket.innerHTML +=` <h1 class="red_rain_jacket"></h1>
                                <p class="red_rain_jacket_price">${bestSellerItem.prices.price} $</p>
                                <p class="text_details">Availability: in stock</p>
                                <p class="text_detail">Product code: AN69433 - Premium</p>
                                <p class="size_detail"> Size:
                                    <span class="s">S</span> 
                                    <span class="m">M</span> 
                                    <span class="l">L</span> 
                                    <span class="xl">XL</span>
                                </p>
                                <button class="addToBag_itemPage">ADD TO BAG  </button>
                                `;

        const addToBagBtn = document.querySelector(".addToBag_itemPage")
        addToBagBtn.addEventListener("click", ()=>{
            window.location = "Yourbag.html";
        })
        
    } catch (error){
        console.log(error);
        modelItem.innerHTML += `<h4 class="loading_error">An error occurred. Cannot find the product you were looking for.</h4>`;
        loader.style.display = "none" ;
    }
}
callApi();

const hamburger = document.querySelector(".fa-bars");
const topNav = document.querySelector(".top_nav");

hamburger.addEventListener("click", ()=>{
    if(topNav.style.display === "block"){
        topNav.style.display = "none"
    } else {
        topNav.style.display = "block";
    }
});

const navLogo = document.querySelector(".nav_logo");
navLogo.addEventListener("click", ()=>{
    window.location = "/"
});









/*
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const getJacketID = params.get("id")

const corsFix = "https://noroffcors.herokuapp.com/";
const IdUrl = "http://nuklaochaem.one/Rainydays/wp-json/wc/store/products/"+ getJacketID;
const jacketUrl = corsFix + IdUrl;

console.log(jacketUrl)

const itemContainer = document.querySelector(".item_container")
const modelItem = document.querySelector(".model_item")
const itemDetails = document.querySelector(".item_description_container")
const loader = document.querySelector(".middel_container")

const rainjacket = document.querySelector(".rainjacket_details")
const itemName = document.querySelector(".red_rain_jacket")
const itemPrice = document.querySelector(".red_rain_jacket_price")
const textDetails = document.querySelector(".text_details")





async function callApi(){
    try{
        const response = await fetch(jacketUrl)
        const bestSellerItem = await response.json(response)

        console.log(bestSellerItem);
        loader.innerHTML = "";
        
        modelItem.innerHTML += `<img class="bestSellerJacket" src="${bestSellerItem.images[0].src}" alt="${bestSellerItem.name}">`
        itemName.innerHTML += `${bestSellerItem.name}`;
        itemDetails.innerHTML += `${bestSellerItem.description}`;
        rainjacket.innerHTML +=` <h1 class="red_rain_jacket"></h1>
                                <p class="red_rain_jacket_price">${bestSellerItem.prices.price} $</p>
                                <p class="text_details">Availability: in stock</p>
                                <p class="text_detail">Product code: AN69433 - Premium</p>
                                <p class="size_detail"> Size:
                                    <span class="s">S</span> 
                                    <span class="m">M</span> 
                                    <span class="l">L</span> 
                                    <span class="xl">XL</span>
                                </p>
                                <a href="#back_to_top"><button class="addToBag_itemPage">ADD TO BAG</button></a>
                                <a href="#back_to_top"><i class="fas fa-heart item_heart"></i></a>
                                `;
    } catch (error){
        console.log(error);
        modelItem.innerHTML += `<h4 class="loading_error">An error occurred. Cannot find the product you were looking for.</h4>`;
        loader.style.display = "none" ;
    }
}
callApi();

const hamburger = document.querySelector(".fa-bars");
const topNav = document.querySelector(".top_nav");

hamburger.addEventListener("click", ()=>{
    if(topNav.style.display === "block"){
        topNav.style.display = "none"
    } else {
        topNav.style.display = "block";
    }
});



const navLogo = document.querySelector(".nav_logo");
navLogo.addEventListener("click", ()=>{
    window.location= "/"
});*/