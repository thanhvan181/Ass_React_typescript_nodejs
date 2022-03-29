// import { checkAuth } from '../middlewares/checkAuth' 
import { Router } from "express";
import {create, list} from "../controllers/city"

const router = Router();

router.post("/city", create )
router.get("/city", list )
// router.delete("/category/:id", remove )

export default router;