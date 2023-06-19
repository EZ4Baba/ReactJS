import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

function emailRedducer(currentState, action) {
  switch (action.type) {
    case "emailChange":
      return { value: action.payLoad, isValid: action.payLoad.includes("@") };
    case "INPUT_BLUR":
      return {
        value: currentState.value,
        isValid: currentState.value.includes("@"),
      };
    default:
      return { value: "", isValid: false };
  }
}
function passwordReducer(currentState, action) {
  switch (action.type) {
    case "PASSWORD_INPUT":
      return {
        value: action.payLoad,
        isValid: action.payLoad.trim().length > 6,
      };
    case "INPUT_BLUR":
      return {
        value: currentState.value,
        isValid: currentState.value.trim() > 6,
      };
    default:
      return { value: "", isValid: currentState.value.trim() > 6 };
  }
}
const Login = (props) => {
  const [emailState, emailDispatcher] = useReducer(emailRedducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, passwordDispatcher] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  // when using useState
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log("EFFECT RUNNING");

  //   return () => {
  //     console.log("EFFECT CLEANUP");
  //   };
  // }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsVaild } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsVaild);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsVaild]);

  const emailChangeHandler = (event) => {
    console.log("val = ", event.target.value);
    // setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );

    emailDispatcher({ type: "emailChange", payLoad: event.target.value });
    // setFormIsValid(
    //   emailState.value.includes("@") && passwordState.value.trim().length > 6
    // );

    // emailDispatcher({ type: "emailChange", payLoad: event.target.value });
    // setFormIsValid(
    //   emailState.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    passwordDispatcher({ type: "PASSWORD_INPUT", payLoad: event.target.value });

    // setFormIsValid(
    //   emailState.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes('@'));
    emailDispatcher({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    passwordDispatcher({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  console.log(emailState.value);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <Input
          Type="email"
          Label="E-Mail"
          OnChange={emailChangeHandler}
          Id={"email"}
          IsValid={emailIsValid}
          Value={emailState.value}
          OnBlur={validateEmailHandler}
        /> */}
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        {/* <Input
          Type="password"
          Label="password"
          OnChange={passwordChangeHandler}
          Id={"password"}
          IsValid={passwordIsVaild}
          Value={passwordState.value}
          OnBlur={validatePasswordHandler}
        /> */}

        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
// import React, { useState, useEffect, useReducer, useContext } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";
// import AuthContext from "../../store/auth-context";

// // const emailReducer = (state, action) => {
// //   if (action.type === "USER_INPUT") {
// //     return { value: action.val, isValid: action.val.includes("@") };
// //   }
// //   if (action.type === "INPUT_BLUR") {
// //     return { value: state.value, isValid: state.value.includes("@") };
// //   }
// //   return { value: "", isValid: false };
// // };
// function emailReducer(state, action) {
//   switch (action.type) {
//     case "USER_INPUT":
//       return { value: action.val, isValid: action.val.includes("@") };
//     case "INPUT_BLUR":
//       return { value: state.value, isValid: state.value.includes("@") };
//     default:
//       return { value: "", isValid: false };
//   }
// }
// const passwordReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.trim().length > 6 };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.trim().length > 6 };
//   }
//   return { value: "", isValid: false };
// };

// const Login = (props) => {
//   // const [enteredEmail, setEnteredEmail] = useState('');
//   // const [emailIsValid, setEmailIsValid] = useState();
//   // const [enteredPassword, setEnteredPassword] = useState('');
//   // const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);

//   const [emailState, dispatchEmail] = useReducer(emailReducer, {
//     value: "",
//     isValid: null,
//   });
//   const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
//     value: "",
//     isValid: null,
//   });

//   const authCtx = useContext(AuthContext);

//   useEffect(() => {
//     console.log("EFFECT RUNNING");

//     return () => {
//       console.log("EFFECT CLEANUP");
//     };
//   }, []);

//   const { isValid: emailIsValid } = emailState;
//   const { isValid: passwordIsValid } = passwordState;

//   useEffect(() => {
//     const identifier = setTimeout(() => {
//       console.log("Checking form validity!");
//       setFormIsValid(emailIsValid && passwordIsValid);
//     }, 500);

//     return () => {
//       console.log("CLEANUP");
//       clearTimeout(identifier);
//     };
//   }, [emailIsValid, passwordIsValid]);

//   const emailChangeHandler = (event) => {
//     // dispatchEmail({ type: "USER_INPUT", val: event.target.value });

//     // setFormIsValid(
//     //   event.target.value.includes('@') && passwordState.isValid
//     // );
//     setTimeout(() => {
//       dispatchEmail({ type: "USER_INPUT", val: event.target.value });
//       // emailDispatcher({ type: "emailChange", payLoad: event.target.value });
//       // setFormIsValid(
//       //   emailState.value.includes("@") && passwordState.value.trim().length > 6
//       // );
//     }, 500);
//   };

//   const passwordChangeHandler = (event) => {
//     dispatchPassword({ type: "USER_INPUT", val: event.target.value });

//     // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
//   };

//   const validateEmailHandler = () => {
//     dispatchEmail({ type: "INPUT_BLUR" });
//   };

//   const validatePasswordHandler = () => {
//     dispatchPassword({ type: "INPUT_BLUR" });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(emailState.value, passwordState.value);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailState.isValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={emailState.value}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordState.isValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={passwordState.value}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;
