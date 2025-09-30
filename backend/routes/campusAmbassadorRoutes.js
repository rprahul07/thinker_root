import express from "express";
const router = express.Router();
import {
    createCampusAmbassador,
    getAllCampusAmbassadors,
    getCampusAmbassadorById,
    updateCampusAmbassador,
    deleteCampusAmbassador
} from "../controllers/campusAmbassadorController.js";

// 📌 Public route: Apply for Campus Ambassador
router.post("/", createCampusAmbassador);

// 📌 Admin/Private routes
// router.get("/", getAllCampusAmbassadors);
// router.get("/:id", getCampusAmbassadorById);
// router.put("/:id", updateCampusAmbassador);
// router.delete("/:id", deleteCampusAmbassador);

export default router;
