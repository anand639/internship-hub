import express from "express";
import { applyToOpportunity, fetchOpportunitesStoreDb, getAllOpportunites, getUserApplications } from "../controllers/opportunitiesController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/",getAllOpportunites);
router.post("/apply",auth,applyToOpportunity);
router.get("/my-applications",auth,getUserApplications);
router.get("/fetchOpportunitesStoreDb",fetchOpportunitesStoreDb);
export default router;
