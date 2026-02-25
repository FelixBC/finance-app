import React from "react";
type headerProps = {
  children: string;
  className: string;
};

const Header: React.FC<headerProps> = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
