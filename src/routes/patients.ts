import express from "express";
import { Response } from "express";
import patientsService from "../services/patientsService";
import {nonSensitive} from "../types/patients";
const router=express.Router();

router.get("/",(_req,res:Response<nonSensitive[ ]>) => {
    res.send(patientsService.getPatients());
});

router.post("/",(_req,res) => {
    res.send("");
});

export default router;
