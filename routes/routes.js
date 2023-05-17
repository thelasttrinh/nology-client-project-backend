import Router from "express";
import {
  getProducts,
  getLaptops,
  getSmartwatches,
  getHeadphones,
  getSpeakers,
  addProduct,
  removeProductById,
  updateProduct,
} from "../controllers/productControllers.js";

import {
  getCart,
  addToCart,
  deleteFromCart,
  updateCart,
} from "../controllers/cartControllers.js";

const router = Router();

router.get("/", getProducts);

router.get("/cart", getCart);

router.get("/laptops", getLaptops);

router.get("/smartwatches", getSmartwatches);

router.get("/headphones", getHeadphones);

router.get("/speakers", getSpeakers);

router.post("/", addProduct);

router.post("/cart/add", addToCart);

router.delete("/:id", removeProductById);

router.put("/:id", updateProduct);

export default router;
