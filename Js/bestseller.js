const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const getJacketID = params.get("id")

const IdUrl = "http://nuklaochaem.one/rainydays/wordpress-5.7/wordpress/wp-json/wc/store/products/"+ getJacketID;
const corsFix = "https://noroffcors.herokuapp.com/";
const jacketUrl = corsFix + IdUrl;

console.log(jacketUrl)

const modelItem = document.querySelector(".model_item")
const itemName = document.querySelector(".red_rain_jacket")
const itemPrice = document.querySelector(".red_rain_jacket_price")
const itemDetails = document.querySelector(".item_details_container")


async function callApi(){
    try{
        const response = await fetch(jacketUrl)
        const bestSellerItem = await response.json(response)
        console.log(bestSellerItem);
        
        modelItem.innerHTML += `<img src="${bestSellerItem.images[0].src}" alt="">`

        itemName.innerHTML += `${bestSellerItem.name}`;
        itemPrice.innerHTML += `${bestSellerItem.prices.price} $`;
        itemDetails.innerHTML += `${bestSellerItem.description}`;
            
    } catch (error){
        console.log(error);
    }
}
callApi();

