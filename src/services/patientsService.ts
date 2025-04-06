import data from "../data/patients";
import { nonSensitive} from "../types/patients";

const getPatients= ():nonSensitive[] => {
    return data;
};
const addPatients =() => {
    return null;
};
export default {getPatients,addPatients};