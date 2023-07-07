import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import allmeals from "../../assets/allMeals2.jpg";
import "./Header.css";
const Header = (props) => {
  function CartButtonHandler() {
    props.onCartClick();
  }
  return (
    <React.Fragment>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onCartClick={CartButtonHandler}></HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={allmeals} alt="mealImage" />
      </div>
    </React.Fragment>
  );
};
export default Header;
