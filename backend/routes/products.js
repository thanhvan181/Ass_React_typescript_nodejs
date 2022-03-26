
// import { checkAuth } from '../middlewares/checkAuth' 
import { Router } from "express";
import { create, list } from "../controllers/product";

// import { create } from "../controllers/user";

const router = Router();

router.post("/products", create )
router.get("/products", list )
// router.delete("/category/:id", remove )

export default router;