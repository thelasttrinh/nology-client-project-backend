# nology-client-project-backend

Pre-Requisites: </br>
Make the schema/db in MySQL first
MUST MAKE YOUR OWN db folder that connects to your local db! </br>
Supports manual inputs of JSON data as of right now

Instructions to start: </br>
cd into nology-client-project-backend </br>
"npm run watch" for get it running </br>

List of endpoints that work: </br>

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

Sample JSON for dummy data:</br>
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

TBD: Filters besides Price </br>
Search Bar </br>
Extensions </br>
