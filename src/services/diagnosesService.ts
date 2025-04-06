import data from "../data/diagnoses";
import diagnoses from "../types/diagnoses";

const getDiagnoses =():diagnoses[] =>{
    return data;
};

const addDiagnoses =() => {
    return null;
};

export default {getDiagnoses,addDiagnoses};