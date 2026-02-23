import { useState, type ReactEventHandler } from "react";

type InputHolderProps = {
  onChange: () => void;
};

type userInputProps = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

const InputHolder: React.FC<InputHolderProps> = ({}) => {
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
    <section id="card__input-section">
      <div>
        <p>
          <label>Initial Investment</label>
          <input
            className="card__input"
            type="number"
            value={userInput.initialInvestment}
            onChange={onChange}
          />
        </p>
        <p>
          <label>Initial AnnualInvesment</label>
          <input
            className="card__input"
            type="number"
            value={userInput.annualInvestment}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUserInput("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            className="card__input"
            type="number"
            value={userInput.duration}
            onChange={onChange}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            className="card__input"
            type="number"
            value={userInput.expectedReturn}
            onChange={onChange}
          />
        </p>
      </div>
    </section>
  );
};

export default InputHolder;
