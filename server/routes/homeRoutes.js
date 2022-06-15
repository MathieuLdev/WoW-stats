import express from "express";
const router = express.Router();
import { getRealms, getUserMedia } from "../controllers/homeController.js";

router.route("/home").get(getRealms);
router.route("/media").get(getUserMedia);

export default router;
