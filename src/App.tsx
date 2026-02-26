import "./App.css";
import Header from "./components/Header";
import InputHolder from "./components/InputHolder";
import type { userInputProps } from "./types/types";
import { useState } from "react";
import ResultsTable from "./components/ResultsTable";
import logo from "./assets/investment-calculator-logo.png";
function App() {
  const [userInput, setUserInput] = useState<userInputProps>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleUserInput = (inputIdentifier: string, newValue: number) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <>
      <div className="container">
        <div>
          <img src={logo} alt="investment-logo" />;
          <Header>Investment Calculator</Header>
        </div>
        <div>
          <InputHolder userInput={userInput} onChange={handleUserInput} />
        </div>
        <div>
          <ResultsTable input={userInput} />
        </div>
      </div>
    </>
  );
}

export default App;
