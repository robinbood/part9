interface Exercise {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export interface InputExercises {
    targetExerciseHours: number;
    dailyExerciseHours: Array<number>;
}


const parseArgumentsExercises = (args: Array<string>): InputExercises => {
    if (args.length < 4) throw new Error('Not enough arguments');

    const inputs = args.slice(2);

    const numberedInputs = inputs.map(input => {
        if (isNaN(Number(input))) {
            throw new Error('Provided values were not numbers!');
        }
        return Number(input);
    });

    return {
        targetExerciseHours: Number(args[2]),
        dailyExerciseHours: numberedInputs.slice(1)
    };
};
const calculateExercises = (dailyExerciseHours: Array<number>, targetExerciseHours: number): Exercise => {
    const periodLength = dailyExerciseHours.length;
    const trainingDays = dailyExerciseHours.filter(hour => hour > 0).length;
    const average = dailyExerciseHours.reduce((acc, it) => acc + it, 0) / periodLength;
    const target = targetExerciseHours;
    const success = average >= target;
    let ratingDescription;
    let rating;
    if (average - target >= 0) {
        rating = 3;
        ratingDescription = "Well done! You have achieved your target. Keep it up!";
    } else if ((average - target) / target >= -0.3) {
        rating = 2;
        ratingDescription = "Not too bad, but could be better.";
    } else {
        rating = 1;
        ratingDescription = "You gotta put in more effort!";
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};


if (require.main===module){
    try {
        const { targetExerciseHours, dailyExerciseHours } = parseArgumentsExercises(process.argv);
        console.log(calculateExercises(dailyExerciseHours, targetExerciseHours));
    } catch (error:unknown) {
        let errorMessage = 'Something bad happened.'
        if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
        }
        console.log(errorMessage);
    }
}
export {calculateExercises}