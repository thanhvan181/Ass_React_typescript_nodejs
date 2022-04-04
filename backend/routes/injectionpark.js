import { Router } from "express";
import { createInjectionPark, listInjectionPark, getInjectPacks, removeInjectionPark, updateInjectionPark, readoneInjectionPark } from "../controllers/injectionPark";





const router = Router();

router.post("/injectionpark", createInjectionPark)

router.get("/injectionparks", listInjectionPark)
router.get("/injectionpark", getInjectPacks)
router.delete("/injectionpark/:id", removeInjectionPark)
router.put("/injectionpark/:id", updateInjectionPark)
router.get('/injectionparks/:id', readoneInjectionPark)
// router.delete("/category/:id", remove )

export default router;