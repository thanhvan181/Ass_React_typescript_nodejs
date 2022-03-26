
import { Router } from "express";
import { create, list } from "../controllers/company";




const router = Router();

router.post("/company", create )

router.get("/company", list )
// router.delete("/category/:id", remove )

export default router;