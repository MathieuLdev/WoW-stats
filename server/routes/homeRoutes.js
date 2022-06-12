import express from "express";
const router = express.Router();
import { getRealms } from "../controllers/homeController.js";

router.route("/home").get(getRealms);

export default router;
