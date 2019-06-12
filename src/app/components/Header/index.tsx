import * as React from "react";
import Logo from "../Logo";
import "./style.css";

const Header = () => (
  <div className="byop-app--header">
    <Logo className="byop-app--header-logo" primaryColor="var(--color-black)" />
    <span className="byop-app--header-x">X</span>
    <span className="byop-header--react-london">React London</span>
  </div>
);

export default Header;
