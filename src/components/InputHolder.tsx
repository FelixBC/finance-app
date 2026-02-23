import type { userInputProps } from "../types/types";
type InputHolderProps = {
  userInput: userInputProps;
  setUserInput: React.Dispatch<React.SetStateAction<userInputProps>>;
};

const InputHolder: React.FC<InputHolderProps> = ({
  setUserInput,
  userInput,
}) => {
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUserInput(
                "initialInvestment",
                Number(event.target.value) || 0,
              )
            }
          />
        </p>
        <p>
          <label>Initial AnnualInvesment</label>
          <input
            className="card__input"
            type="number"
            value={userInput.annualInvestment}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUserInput(
                "annualInvestment",
                Number(event.target.value) || 0,
              )
            }
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            className="card__input"
            type="number"
            value={userInput.duration}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUserInput("duration", Number(event.target.value) || 0)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            className="card__input"
            type="number"
            value={userInput.expectedReturn}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUserInput("expectedReturn", Number(event.target.value) || 0)
            }
          />
        </p>
      </div>
    </section>
  );
};

export default InputHolder;
