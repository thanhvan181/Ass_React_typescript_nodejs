
// import { checkAuth } from '../middlewares/checkAuth' 
import { Router } from "express";
import { create, list, remove } from '../controllers/category';
// import { create } from "../controllers/user";

const router = Router();

router.post("/category", create )
router.get("/category", list )
router.delete("/category/:id", remove )

export default router;