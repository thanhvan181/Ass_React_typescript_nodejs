
import { Router } from "express";
import { create, list } from "../controllers/register";




const router = Router();

router.post("/register", create )

router.get("/register", list)
// router.delete("/category/:id", remove )

export default router;