const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const getJacketID = params.get("id")



const jacketUrl = "http://nuklaochaem.one/rainydays/wordpress-5.7/wordpress/wp-json/wc/store/products/" + getJacketID;

console.log(jacketUrl)

const modelItem = document.querySelector(".model_item")
const itemName = document.querySelector(".red_rain_jacket")
const itemPrice = document.querySelector(".red_rain_jacket_price")
const itemDetails = document.querySelector(".item_details_container")
console.log(itemDetails);
async function callApi(){
    try{
        const response = await fetch(jacketUrl)
        const bestSellerItem = await response.json(response)
        console.log(bestSellerItem);
        
        modelItem.innerHTML += `${bestSellerItem.images[0].src}`;
        itemName.innerHTML += `${bestSellerItem.name}`;
        itemPrice.innerHTML += `${bestSellerItem.prices.price} $`;
        itemDetails.innerHTML += `${bestSellerItem.description}`;
            
    } catch (error){
        console.log(error);
    }
}
callApi();

