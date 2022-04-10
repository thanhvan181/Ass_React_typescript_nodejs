
import { Router } from "express";
import { create } from "../controllers/order";
// import { userById } from '../controllers/users';




const router = Router();

router.post("/order", create )

// router.get("/register", list)
// router.delete("/category/:id", remove )
// router.param("userId", userById);
export default router;