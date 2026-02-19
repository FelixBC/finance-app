import { useState } from "react";

type InputHolderProps = {};

const InputHolder: React.FC<InputHolderProps> = () => {
  const [initial, setInitial] = useState<number>(0);
  const [expectedReturn, setExpectedReturn] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [anualInvestment, setAnualInvestment] = useState<number>(0);

  const handleInitial = () => {
    setInitial((setInitial) => setInitial)

  };

  return (
    <div className="card__input-container">
      <input type="number" className="card__input" value={initial} />
      <input type="number" className="card__input" value={expectedReturn} />
      <input type="number" className="card__input" value={duration} />
      <input type="number" className="card__input" value={anualInvestment} />
    </div>
  );
};

export default InputHolder;
