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
} from "../controllers/controllers.js";

const router = Router();

router.get("/", getProducts);

router.get("/laptops", getLaptops);

router.get("/smartwatches", getSmartwatches);

router.get("/headphones", getHeadphones);

router.get("/speakers", getSpeakers);

router.post("/", addProduct);

router.delete("/:id", removeProductById);

router.put("/:id", updateProduct);

export default router;
