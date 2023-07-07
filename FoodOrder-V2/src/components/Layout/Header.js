import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";
import allMeals from "../../assets/allMeals.jpg";
function Header(props) {
  return (
    <>
      <header className="header">
        <h1>Food Order App</h1>
        <HeaderCartButton onCartShowClick={props.onCartShow} />
      </header>
      <div className="main-image ">
        <img src={allMeals} alt="all meals" />
      </div>
    </>
  );
}
export default Header;
