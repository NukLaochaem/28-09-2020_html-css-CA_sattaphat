const wordPressUrl = "http://nuklaochaem.one/rainydays/wordpress-5.7/wordpress/wp-json/wc/store/products/";
const corsFix = "https://noroffcors.herokuapp.com/";
const url = corsFix + wordPressUrl;

const bestSellerContainer = document.querySelector(".container_bestsell");
const indexLoading = document.querySelector(".index_loading")

async function api(){
    try{
        const response = await fetch(url);
        const bestSeller = await response.json(response);
        
        console.log(bestSeller);
        indexLoading.innerHTML = "";
        for(let i = 0; i < bestSeller.length; i++){
            if(i === 5){
                break;
            }
        console.log(bestSeller[i]);
        bestSellerContainer.innerHTML += ` <div class="best_seller_item">
                                                <a class="best_Seller_Link" href="bestseller.html?id=${bestSeller[i].id}">
                                                <img class="best_seller_img" src="${bestSeller[i].images[0].src}"></img>
                                                <p>${bestSeller[i].name} ${bestSeller[i].prices.price} ${bestSeller[i].prices.currency_symbol}</p>
                                                </a>
                                            </div>`
        }
    } catch (error){
        console.log(error);
        bestSellerContainer.innerHTML +=`<h4 class="loading_error">An error occurred, Cannot find the items. Please try again later </h4>`
    }
}
api();

//footer