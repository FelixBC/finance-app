import "./App.css";
import Header from "./components/Header";
import InputHolder from "./components/InputHolder";
import type { userInputProps } from "./types/types";
import { useState } from "react";
import ResultsTable from "./components/ResultsTable"

function App() {
  const [userInput, setUserInput] = useState<userInputProps>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });


  return (
    <>
      <div className="container">
        <Header className="card__header">Investment Calculator</Header>
        <div className="card__input-container">
          <InputHolder userInput={userInput} setUserInput={setUserInput}/>
          <ResultsTable />
        </div>
      </div>
    </>
  );
}

export default App;
