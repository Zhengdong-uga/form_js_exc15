import './App.css';
import Problem1 from "./components/problems/Problem1";
import Problem2 from "./components/problems/Problem2";
import Problem3 from "./components/problems/Problem3";
import Problem4 from "./components/problems/Problem4";
import ProblemWrapper from "./components/problems/ProblemWrapper";


function App() {
  return (
    <>
      <ProblemWrapper name='Problem 1'><Problem1 /></ProblemWrapper>
      <ProblemWrapper name='Problem 2'><Problem2 /></ProblemWrapper>
      <ProblemWrapper name='Problem 3'><Problem3 /></ProblemWrapper>
      <ProblemWrapper name='Problem 4 (stretch)'><Problem4 /></ProblemWrapper>
    </>
  );
}

export default App;
