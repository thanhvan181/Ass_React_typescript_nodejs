
import { checkAuth } from '../middlewares/checkAuth' 
import { Router } from "express";
import { create } from '../controllers/category';
// import { create } from "../controllers/user";

const router = Router();

router.post("/category",checkAuth, create )

export default router;