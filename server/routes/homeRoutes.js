import express from "express";
const router = express.Router();
import { getRealms, getUserMedia } from "../controllers/homeController.js";
import { getUserStats } from "../controllers/statsController.js";

router.route("/home").get(getRealms);
router.route("/media").get(getUserMedia);
router.route("/stats").get(getUserStats);

export default router;
