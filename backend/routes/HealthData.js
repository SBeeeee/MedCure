import express from "express";
import { senddata,getdata } from "../controller/HealthData.js";

const router=express.Router();
router.route("/save").post(senddata);
router.route("/getData/:id").get(getdata);

export default router;