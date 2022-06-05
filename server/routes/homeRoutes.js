import express from "express";
const router = express.Router();
import { getRealms, postRealmVar } from "../controllers/homeController.js";

router.route("/home").post(postRealmVar).get(getRealms);

export default router;
