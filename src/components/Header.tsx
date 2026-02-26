import React from "react";
import "./Header.css"
type headerProps = {
  children: string;
  className: string;
};

const Header: React.FC<headerProps> = ({ children }) => {
  return (
    <div className="header__title">
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
