import React from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
});
export default AuthContext;
// react.createContext() will return object that contains a component
// parameter  = default value
// the default value will not be consumed if we use .Provider
