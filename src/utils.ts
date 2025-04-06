import { newPatientEntry,Gender } from "./types/patients";

const isString = (text : unknown): text is string => {
    return typeof text === "string" || text instanceof String;
};

const parseName = (name : unknown) : string => {
    if (!isString(name)) {
        throw new Error("incorrect name");
        
    };
    return name;
};
const parseSsn = (ssn : unknown): string => {
    if (!isString(ssn)) {
        throw new Error("incorrect ssn>>" + ssn);
    }
    return ssn;
};

const parseOccupation = (occupation: unknown) :string => {
    if (!isString(occupation)) {
        throw new Error("incorrect occupation>>" + occupation);
    }
    return occupation;
};

const isDate = (date:string) : boolean => {
    return Boolean(Date.parse(date));
};

const parseDate= (date : unknown) : string => {
    if (!isString(date) || !isDate(date)) {
        throw new Error("incorrect date:" + date);
    }
    return date;
};

const isGender = (param :string) : param is Gender => {
    return Object.values(Gender).map(g => g.toString()).includes(param);
};

const parseGender = (gender : unknown) : Gender => {
    if (!isString(gender) || !isGender(gender) ) {
        throw new Error("incorrect gender"+ gender);
    }
    return gender;  
};

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

