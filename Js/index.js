const wordPressUrl = "http://nuklaochaem.one/Rainydays/wp-json/wc/store/products/";
const corsFix = "https://noroffcors.herokuapp.com/";
const url = corsFix + wordPressUrl;

const bestSellerContainer = document.querySelector(".container_bestsell");

async function api(){
    try{
        const response = await fetch(url);
        const bestSeller = await response.json(response);
        
        for(let i = 0; i < bestSeller.length; i++){
            if(i === 6){
                break;
            }
        bestSellerContainer.innerHTML += ` <div class="best_seller_item">
                                                <a class="best_Seller_Link" href="item.html?id=${bestSeller[i].id}">
                                                <img class="best_seller_img" src="${bestSeller[i].images[0].src}"></img>
                                                <p>${bestSeller[i].name} </p>
                                                <p>${bestSeller[i].prices.price} ${bestSeller[i].prices.currency_symbol}</p>
                                                </a>
                                            </div>`
        }
    } catch (error){
        bestSellerContainer.innerHTML +=`<h4 class="loading_error_home">An error occurred, Cannot find the products. Try again later </h4>`
    }
}
api();




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
});




/*   your bag btn       */


const checkOut_btn = document.querySelector(".checkout_btn");

checkOut_btn.addEventListener("click", ()=>{
    window.location = "Payment.html";
});