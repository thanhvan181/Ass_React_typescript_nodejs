
// import { checkAuth } from '../middlewares/checkAuth' 
import { Router } from "express";
import { create, getProducts, getProductsCategory, list } from "../controllers/product";

// import { create } from "../controllers/user";

const router = Router();

router.post("/products", create )
router.get("/products", list )
router.get("/products/:id", getProducts )
router.get("/products/category/:id", getProductsCategory)
// router.delete("/category/:id", remove )

export default router;