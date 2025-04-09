import express from "express";
import patientsRouter from "./routes/patients";
import diagnosesRouter from"./routes/diagnoses";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.get('/api/ping', (_req, res) => {
    res.status(200).send("ping");
    return;
});
app.use("/api/patients",patientsRouter);
app.use("/api/diagnoses", diagnosesRouter);

const PORT = 3000;

app.listen(PORT,() => {
    console.log(`app is running on ${PORT}`);
    
});