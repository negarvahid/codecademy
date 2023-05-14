import React from "react";
import Image from "../img/airbnb.jpg";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={Image} className="nav--log" />
      </nav>
    </div>
  );
};

export default Navbar;
