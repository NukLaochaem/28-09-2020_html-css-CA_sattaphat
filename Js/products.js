const wordPressUrl = "http://nuklaochaem.one/Rainydays/wp-json/wc/store/products/";
const corsFix = "https://noroffcors.herokuapp.com/";
const url = corsFix + wordPressUrl;

const productContainer = document.querySelector(".products_container");
//const indexLoading = document.querySelector(".index_loading");

async function api(){
    try{
        const response = await fetch(url);
        const products = await response.json(response);
        
        console.log(products);
        for(let i = 0; i < products.length; i++){
            if(i === 9){
                break;
            }
        console.log(products[i]);
        productContainer.innerHTML += ` <div class="product_jacket">
                                                <a  href="/Item.html?id=${products[i].id}">
                                                <img class="best_seller_img" src="${products[i].images[0].src}"></img>
                                                <p class="product_name">${products[i].name} </p>
                                                <p class="product_price">${products[i].prices.price} ${products[i].prices.currency_symbol}</p>
                                                </a>
                                            </div>`
        }
    } catch (error){
        console.log(error);
        productContainer.innerHTML +=`<h4 class="loading_error">An error occurred, Please try again later </h4>`
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




const sorting = document.querySelector(".filter_sort");

document.querySelectorAll(".products_bar").forEach(productsBar=> {
    sorting.addEventListener("click", ()=>{
        if(productsBar.style.display === "block"){
            productsBar.style.display = "none"
            sorting.innerHTML = `<span>FILTER/SORT<i class="fas fa-angle-down"></i></span>`;
        } else {
            productsBar.style.display = "block";
            sorting.innerHTML = `<span>FILTER/SORT<i class="fas fa-angle-up"></i></span>`;
        }
    })
})