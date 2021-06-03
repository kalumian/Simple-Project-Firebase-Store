import React from "react";
import { useFirestore } from "../../firebase/useFirestore";
import "./header.css";

function Header() {
    const {budget} = useFirestore()
  return (
    <div className="header">
      <div className="header__title">
        <h1>Badget Trakert</h1>
      </div>
      <div className="header__balance">${budget}</div>
    </div>
  );
}

export default Header;
