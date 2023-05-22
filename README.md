# nology-client-project-backend

## Pre-Requisites: </br>

Make the schema/db in MySQL first </br>
MUST MAKE YOUR OWN db folder that connects to your local db! </br>
nodemon may require installation as it's set as a dev dependency </br>
Supports manual inputs of JSON data as of right now</br>

## **Instructions to start:** </br>

cd into nology-client-project-backend </br>
"npm run watch" for get it running via nodemon </br>

## **URL to use:**</br>

http://URLorlocalhost:port/api/products/ </br>

## **List of endpoints that work:** </br>

router.get("/filterByPrice", filterByPrice);</br>
router.get("/:id", getProductById);</br>
router.get("/laptops", getLaptops);</br>
router.get("/smartwatches", getSmartwatches);</br>
router.get("/headphones", getHeadphones);</br>
router.get("/speakers", getSpeakers);</br>
router.get("/cart", getCart);</br>

router.get("/", getProducts);</br>
router.post("/", addProduct);</br>
router.delete("/:id", removeProductById);</br>
router.put("/:id", updateProduct);</br>
router.post("/cart", addToCart);</br>
router.delete("/cart/:id", deleteFromCart);</br>
router.put("/cart/:id", updateCart);</br>

## **Specific requirements for certain endpoints:** </br>

filterByPrice requires 2 queries min & max. Ex. /filterByPrice?min=0&max=100

## **Sample JSON for dummy data:**</br>

{</br>
&nbsp;&nbsp;"productCompany": "Samsung",</br>
&nbsp;&nbsp;"productName": "Galaxy Buds",</br>
&nbsp;&nbsp;"productPrice": 111.11,</br>
&nbsp;&nbsp;"productType": "headphone",</br>
&nbsp;&nbsp;"productImage": "N/A",</br>
&nbsp;&nbsp;"productDescription": "Popular to the world",</br>
&nbsp;&nbsp;"productQuantity": 99,</br>
&nbsp;&nbsp;"rating": 0.0</br>
}</br>

## **TBD:** </br>

Filters besides Price </br>
Search Bar </br>
Extensions </br>
Large dummy dataset for cloud integration </br>
