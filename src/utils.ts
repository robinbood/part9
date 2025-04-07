import { newPatientEntry,Gender } from "./types/patients";
import {z} from "zod";


export const toNewPatientEntry = (object : unknown) : newPatientEntry => {
    if ( !object || typeof object !== 'object') {
        throw new Error("incorrect or missing data");
    }

    if ('name' in object && 'ssn' in object && 'occupation' in object && 'date' in object && 'gender' in object) {
        const newEntry : newPatientEntry= {
            name:parseName(object.name),
            dateOfBirth: parseDate(object.date),
            ssn:parseSsn(object.ssn),
            gender:parseGender(object.gender),
            occupation:parseOccupation(object.occupation)

        };
        return newEntry;
    }
    throw new Error("incorrect date soome fields are missing");
};

