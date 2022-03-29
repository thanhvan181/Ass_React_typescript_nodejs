
import { Router } from "express";
import { create, list, listCompany, readCompanyinCity } from "../controllers/company";




const router = Router();

router.post("/company", create )

router.get("/company", listCompany )
router.get("/company/:id", readCompanyinCity )

export default router;