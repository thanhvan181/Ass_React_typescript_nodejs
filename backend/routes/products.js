
// import { checkAuth } from '../middlewares/checkAuth' 
import { Router } from "express";
import { create, getProducts, getProductsCategory, getProductsle, list, read, remove, update } from "../controllers/product";

// import { create } from "../controllers/user";

const router = Router();

router.post("/product", create )
router.get("/products", list )
// router.get("/product", getProductsle  )
router.get("/products/:id", getProducts )
router.get("/products/category/:id", getProductsCategory)
router.delete("/product/:id", remove )
router.get("/product/:id", read )
router.put("/product/:id", update )

export default router;