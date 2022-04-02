
// import { checkAuth } from '../middlewares/checkAuth' 
import { Router } from "express";
import { create, getProducts, getProductsCategory, searchProduct, list, read, remove, update, listProducts, getProductsSubcateogy, fetchAllProduct } from "../controllers/product";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
import { userById } from '../controllers/user';
// import { create } from "../controllers/user";

const router = Router();

router.post("/product",create)
router.get("/products", list)
router.get("/productall", fetchAllProduct)

router.get("/search", searchProduct)
router.get("/products/:id", getProducts)
router.get("/products/category/:id", getProductsCategory)
router.get("/products/subcategory/:id", getProductsSubcateogy)
router.delete("/product/:id", remove)
router.get("/product/:id", read)
router.put("/product/:id", update)

// router.param("userId", userById);
export default router;