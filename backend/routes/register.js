
import { Router } from "express";
import { create, list } from "../controllers/register";
import { checkAuth } from '../middlewares/auth';




const router = Router();

router.post("/register", checkAuth, create)

router.get("/register", checkAuth, list)
// router.delete("/category/:id", remove )

export default router;