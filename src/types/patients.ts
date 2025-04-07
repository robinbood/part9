import { newEntrySchemna } from "../utils";
import { z } from "zod";
export interface patients {
    id:string;
    name:string;
    dateOfBirth:string;
    ssn?:string;
    gender:Gender;
    occupation:string;
};
export enum Gender {
    Male ='male',
    Female ='female',
    Other = 'other'
};
export type newPatientEntry = z.infer<typeof newEntrySchemna>;
export type nonSensitive = Omit<patients,'ssn'>;
