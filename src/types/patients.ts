export interface patients {
    id:string;
    name:string;
    dateOfBirth:string;
    ssn?:string;
    gender:Gender;
    occupation:string;
};
export enum Gender {
    Male ="male",
    Female ="female",
    Other = "other"
};
export type newPatientEntry = Omit<patients, "id">;
export type nonSensitive = Omit<patients,'ssn'>;

export default patients;