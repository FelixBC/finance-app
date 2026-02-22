import { useState } from "react";

type InputHolderProps = {
  onChange: () => void;
};

const InputHolder: React.FC<InputHolderProps> = ({ onChange }) => {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <>
      <input
        className="card__input"
        type="number"
        value={}
        onChange={onChange}
      />
      <input
        className="card__input"
        type="number"
        value={}
        onChange={onChange}
      />
      <input
        className="card__input"
        type="number"
        value={}
        onChange={onChange}
      />
      <input
        className="card__input"
        type="number"
        value={}
        onChange={onChange}
      />
    </>
  );
};

export default InputHolder;
