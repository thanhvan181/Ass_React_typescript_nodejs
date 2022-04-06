
import { Router } from "express";
import { create, list } from "../controllers/register";
import { adminCheck, checkAuth } from '../middlewares/checkAuth';




const router = Router();

router.post("/register", checkAuth, create)

router.get("/register", checkAuth, list)
// router.delete("/category/:id", remove )

export default router;