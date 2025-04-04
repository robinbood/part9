import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { InputExercises,calculateExercises } from "./ExerciseCalculator";
const app = express();
app.use(express.json())

app.get('/hello' , (_req,res) => {
    res.send("Hello Full Stack")
});

app.get('/bmi', (req, res) => {
    if ((req.query.height && req.query.weight) && !isNaN(Number(req.query.height)) && !isNaN(Number(req.query.weight))) {
        res.status(200).send({
            weight: Number(req.query.weight),
            height: Number(req.query.height),
            bmi: calculateBmi(Number(req.query.height), Number(req.query.weight))
        });
    } else {
        res.status(400).send({
            error: "malformatted parameters"
        });
    }
});

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {targetExerciseHours,dailyExerciseHours}:InputExercises = req.body;

    if (!targetExerciseHours || !dailyExerciseHours) {
        return res.status(400).send({
            error: "parameters missing"
        });
    }

    if (!dailyExerciseHours
        .every((i) => (typeof i === "number")) || isNaN(Number(targetExerciseHours))) {
        return res.status(400).send({
            error: "malformatted parameters"
        });
    }

    try {
        const exercises = calculateExercises(dailyExerciseHours, targetExerciseHours);
        return res.status(200).send({exercises});
    } catch(error:unknown) {
        return res.status(400).send({
            error: "malformatted parameters"
        });
    }


});
const PORT  = 3003

app.listen(PORT, () => {
    console.log("server started at" , PORT)
});
