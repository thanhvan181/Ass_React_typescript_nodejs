import { Router } from "express";
import { createInjectionPark, listInjectionPark, getInjectPacks } from "../controllers/injectionPark";





const router = Router();

router.post("/injectionpark", createInjectionPark)

router.get("/injectionpark", listInjectionPark)
router.get("/injectionpacks", getInjectPacks)
// router.delete("/category/:id", remove )

export default router;