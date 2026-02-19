import React from "react";
import logo from "../assets/investment-calculator-logo.png";
type headerProps = {
  children: string;
  className: string;
};

const Header: React.FC<headerProps> = ({ children }) => {
  return (
    <div>
      <img src={logo} alt="investment-logo" />;
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
