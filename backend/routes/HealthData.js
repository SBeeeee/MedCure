import express from "express";
import { senddata,getdata } from "../controller/HealthData.js";
import { getHealthScore } from "../controller/Predict.js";

const router=express.Router();
router.route("/save").post(senddata);
router.route("/getData/:id").get(getdata);
router.route("/healthscore").post(getHealthScore);

export default router;