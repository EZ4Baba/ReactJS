import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  console.log("rendering");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("authenticated", "1");
    setIsLoggedIn(true);
  };

  // the fn under useEffect will be rendered at end
  // as dependency array is empty it will run 1st time only
  useEffect(() => {
    if (localStorage.getItem("authenticated") === "1") {
      // setIsLoggedIn(true) will cause infinity loop
      setIsLoggedIn(true);
    }
  }, []);
  // this will cause inifinity loop that why we use effect
  // if(localStorage.getItem("authenticated")==='1'){
  //   // setIsLoggedIn(true) will cause infinity loop
  // }
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authenticated");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
