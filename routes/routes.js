import Router from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  deleteProductById,
  getAllSmartwatches,
  getAllsmartwatchesById,
  addsmartwatches,
  deletesmartwatches,
  deletesmartwatchesById,
  getAllLaptops,
  getAllLaptopsById,
  addLaptops,
  deleteLaptops,
  deleteLaptopsById,
  getAllHeadphones,
  getAllHeadphonesById,
  addHeadphones,
  deleteHeadphones,
  deleteHeadphonesById,
  getAllSpeakers,
  getAllSpeakersById,
  filterByHighestRated,
  filterByPricehightolow,
  filterByPricelowtohigh,
  searchAll

  
} from "../controllers/productControllers.js";

import {
  getCart,
  addToCart,
  deleteFromCart,
  updateCart,
} from "../controllers/cartControllers.js";

const router = Router();

router.get("/", getProducts);

router.get("/laptops", getLaptops);

router.get("/smartwatches", getSmartwatches);

router.get("/headphones", getHeadphones);

router.get("/speakers", getSpeakers);

router.post("/", addProduct);

router.delete("/:id", removeProductById);

router.put("/:id", updateProduct);

router.get("/cart", getCart);

router.post("/cart", addToCart);

router.delete("/cart/:id", deleteFromCart);

router.put("/cart/:id", updateCart);

export default router;
