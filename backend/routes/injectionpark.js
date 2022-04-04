import { Router } from "express";
import { createInjectionPark, listInjectionPark, getInjectPacks, removeInjectionPark, updateInjectionPark } from "../controllers/injectionPark";





const router = Router();

router.post("/injectionpark", createInjectionPark)

router.get("/injectionparks", listInjectionPark)
router.get("/injectionpark", getInjectPacks)
router.delete("/injectionparks/:id", removeInjectionPark)
router.put("injectionparks/:id", updateInjectionPark)
// router.delete("/category/:id", remove )

export default router;