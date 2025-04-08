import { PartProps } from "./types";

const Part = (props: PartProps) => {
    const {part} = props;
    switch (part.kind) {
        case "basic":
          return (
            <div>
              <h3>
                {part.name} {part.exerciseCount}
              </h3>
              <p>
                <em>{part.description}</em>
              </p>
            </div>
          );
        case "group":
          return (
            <div>
              <h3>
                {part.name} {part.exerciseCount}
              </h3>
              <p>project exercises {part.groupProjectCount}</p>
            </div>
          );
        case "background":
          return (
            <div>
              <h3>
                {part.name} {part.exerciseCount}
              </h3>
              <p>
                <em>{part.description}</em>
              </p>
              <p>background material: {part.backgroundMaterial}</p>
            </div>
          );
        case "special":
          return (
            <div>
              <h3>
                {part.name} {part.exerciseCount}
              </h3>
              <p>
                <em>{part.description}</em>
              </p>
              <p>required skills: {part.requirements.join(", ")}</p>
            </div>
          );
        default:
          return assertNever(part);
      }
};
const assertNever = (value:never) : never => {
    throw new Error(`Unhandled diuscriminated union member: ${JSON.stringify(value)}` );
};
export default Part;