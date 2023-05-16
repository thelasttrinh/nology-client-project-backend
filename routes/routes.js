import Router from "express";
import { getProducts, addProduct } from "../controllers/controllers.js";

const router = Router();

router.get("/", getProducts);

router.post("/", addProduct);

export default router;
