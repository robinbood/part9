import { HeaderProps } from "./types";
import courseParts from "./data";
import Part from "./Part";
import { TotalProps } from "./types";
const App =() =>{ 

  const Header = (props:HeaderProps)=>{
    return <h1>{props.name}</h1>
  }; 
  const courseName = "Half Stack application development";
  
  const Content = (props:TotalProps) => {
    const {courseParts} = props;

    return( courseParts.map((c,cs) => (<Part key={cs} part={c}/>))
  )};
  const Total = () => {
    return <p>number of exercises {courseParts.reduce((sum,part) => sum+ part.exerciseCount, 0)}</p>
    }
  return (
    <div>
      <Header name={courseName}/>
      <Content courseParts={courseParts}/>
      <Total  />
    </div>
  )
};
export default App
