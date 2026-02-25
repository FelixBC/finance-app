import type { userInputProps } from "../types/types";

type InputHolderProps = {
  userInput: userInputProps;
  onChange: (inputIdentifier: string, newValue: number) => void;
};

const InputHolder: React.FC<InputHolderProps> = ({ userInput, onChange }) => {
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
              onChange("initialInvestment", Number(event.target.value) || 0)
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
              onChange("annualInvestment", Number(event.target.value) || 0)
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
              onChange("duration", Number(event.target.value) || 0)
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
              onChange("expectedReturn", Number(event.target.value) || 0)
            }
          />
        </p>
      </div>
    </section>
  );
};

export default InputHolder;
