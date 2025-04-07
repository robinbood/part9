import data from "../data/patients";
import { v1 as uuid } from "uuid";
import {patients,  newPatientEntry, nonSensitive} from "../types/patients";

const getPatients= ():nonSensitive[] => {
    return data.map(({id,name,dateOfBirth,gender,occupation}) => ({id,dateOfBirth,name,occupation,gender}));
};
const addPatients =(entry:newPatientEntry):patients => {
    const newPatientEntry = {
        id:uuid(),
        ...entry
    };
    data.push(newPatientEntry);
    return newPatientEntry;
};
export default {getPatients,addPatients};