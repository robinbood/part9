import express, { NextFunction, Request } from "express";
import { Response } from "express";
import patientsService from "../services/patientsService";
import {nonSensitive} from "../types/patients";
import { z } from "zod";
import { newEntrySchemna } from "../utils";
import { newPatientEntry,patients } from "../types/patients";

const router=express.Router();

router.get("/",(_req,res:Response<nonSensitive[ ]>) => {
    res.send(patientsService.getPatients());
});

const newPatientParser = (req:Request,_res:Response,next:NextFunction) => {
    try {
        newEntrySchemna.parse(req.body);
        console.log(req.body);
        next();
        
    } catch (error:unknown) {
        next(error);
    }
};

const errorMiddleware = (error:unknown, _req:Request, res:Response,next:NextFunction) => {
    if (error instanceof z.ZodError){
        res.status(400).send({error:error.issues});
    }else {
        next(error);
    }
};

router.post("/",newPatientParser,(req:Request<unknown,unknown,newPatientEntry>,res:Response<patients>) => {
    const addedEntry = patientsService.addPatients(req.body);
    res.json(addedEntry);
});

router.use(errorMiddleware);
export default router;
