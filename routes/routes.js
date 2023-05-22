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
  getProductById,
  filterByPrice,
  filterByHighestRated,
  filterByPriceByType,
  filterByPriceByTypeByBrand,
  searchAll,
} from "../controllers/productControllers.js";

import {
  getCart,
  addToCart,
  deleteFromCart,
  updateCart,
} from "../controllers/cartControllers.js";

const router = Router();

// router.get("/", getProducts);

// router.get("/laptops", getLaptops);

// router.get("/smartwatches", getSmartwatches);

// router.get("/headphones", getHeadphones);

// router.get("/speakers", getSpeakers);

// router.post("/", addProduct);

// router.delete("/:id", removeProductById);

// router.put("/:id", updateProduct);

// router.get("/cart", getCart);

// router.post("/cart", addToCart);

// router.delete("/cart/:id", deleteFromCart);

// router.put("/cart/:id", updateCart);

// router.get("/filterByPrice", filterByPrice);

// router.get("/:id", getProductById);

router.get("/filterByPrice", filterByPrice);
router.get("/filterByHighestRated", filterByHighestRated);
router.get("/:id", getProductById);
router.get("/laptops", getLaptops);
router.get("/smartwatches", getSmartwatches);
router.get("/headphones", getHeadphones);
router.get("/speakers", getSpeakers);
router.get("/cart", getCart);

router.get("/", getProducts);
router.post("/", addProduct);
router.delete("/:id", removeProductById);
router.put("/:id", updateProduct);
router.post("/cart", addToCart);
router.delete("/cart/:id", deleteFromCart);
router.put("/cart/:id", updateCart);

export default router;
