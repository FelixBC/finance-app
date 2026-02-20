import { useState } from "react";

type InputHolderProps = {
  type: string;
  className: string;
  value: number;
  onChange: () => void;
};

const InputHolder: React.FC<InputHolderProps> = ({type, className, value, onChange}) => {
  return (
      <input type={type} className={className} value={value} onChange={onChange} />
  );
};

export default InputHolder;
