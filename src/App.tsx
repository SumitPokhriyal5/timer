import Head from "./components/Head"
import StepCard from "./components/StepCard"
import Timer from "./components/Timer"

function App() {
 
  return (
    <div className='App'>
      <Head/>
      <Timer/>
      <StepCard/>
    </div>
  )
}

export default App
/**
   make a timer in react using typescript:-
    initially timer always start from 60 sec and text should be go like this :- 01 : 00 -> 00 : 59 -> 00 : 58,  
    use react-circular-progressbar for timer progress bar it should be dynamic based on the time remaining.
    there should be 2 buttons below react circular progressbar:-
       1st button :- + 10 sec( by clicking it 10 sec should be added and don't increase more than 60 sec )
       2nd button :- skip button( by clicking it timer should restart from 60 sec )
 */