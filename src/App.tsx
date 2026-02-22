import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputHolder from "./components/InputHolder";

function App() {
  const [initial, setInitial] = useState<number>(0);
  const [expectedReturn, setExpectedReturn] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [anualInvestment, setAnualInvestment] = useState<number>(0);
  const type = "number";
  const className = "card__input";

  const handleResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
  };

  return (
    <>
      <div className="container">
        <Header className="card__header">Investment Calculator</Header>
        <div className="card__input-container">
          <InputHolder
            className={className}
            type={type}
            value={initial}
            onChange={}
          />
          <InputHolder
            className={className}
            type={type}
            value={expectedReturn}
            onChange={}
          />
          <InputHolder
            className={className}
            type={type}
            value={duration}
            onChange={}
          />
          <InputHolder
            className={className}
            type={type}
            value={anualInvestment}
            onChange={}
          />
        </div>
      </div>
    </>
  );
}

export default App;
