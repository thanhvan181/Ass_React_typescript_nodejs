import { Router } from "express";
import { createInjectionPark, listInjectionPark } from "../controllers/injectionPark";





const router = Router();

router.post("/injectionpark", createInjectionPark )

router.get("/injectionpark", listInjectionPark )
// router.delete("/category/:id", remove )

export default router;