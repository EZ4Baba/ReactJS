import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

//using props -

// const Navigation = (props) => {
//   return (
//     <nav className={classes.nav}>
//       <ul>
//         {props.isLoggedIn && (
//           <li>
//             <a href="/">Users</a>
//           </li>
//         )}
//         {props.isLoggedIn && (
//           <li>
//             <a href="/">Admin</a>
//           </li>
//         )}
//         {props.isLoggedIn && (
//           <li>
//             <button onClick={props.onLogout}>Logout</button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// 2 ways to consume the context

//1 - old way ( not recommended now) using AuthContext.Consumer
// consumer will take a function as child and this function should return JSX

// const Navigation = (props) => {
//   return (
//     <AuthContext.Consumer>
//       {(ContextData) => {
//         return (
//           <nav className={classes.nav}>
//             <ul>
//               {ContextData.isLoggedIn && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {ContextData.isLoggedIn && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {ContextData.isLoggedIn && (
//                 <li>
//                   <button onClick={props.onLogout}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         );
//       }}
//     </AuthContext.Consumer>
//   );
// };

// 2nd way - using useContext hook

const Navigation = (props) => {
  const ContextData = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ContextData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ContextData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ContextData.isLoggedIn && (
          <li>
            <button onClick={ContextData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
