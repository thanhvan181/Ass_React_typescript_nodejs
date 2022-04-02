
// import { checkAuth } from '../middlewares/checkAuth' 
import { Router } from "express";
import { create, getCategory, list, remove } from '../controllers/category';
import { update } from "../controllers/product";
// import { create } from "../controllers/user";

const router = Router();

router.post("/category", create)
router.get("/category", list)
router.get("/categories", getCategory)
router.put("/category/:id", update)
router.delete("/category/:id", remove)

export default router;