import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

class Users extends Component {
  DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
  ];

  // to define state in class based component Contructor is used
  constructor() {
    super();
    //state is always object is class based component
    // this will merge with current state not over write it
    this.state = {
      showUsers: true,
    };
  }
  componentDidMount() {
    console.log("users mounted");
  }
  componentDidUpdate() {
    console.log(this.props.users.length);
    if (this.props.users.length === 0) {
      throw new Error("no user found");
    }
  }
  toggleUsersHandler() {
    this.setState((currentState) => {
      return { showUsers: !currentState.showUsers };
    });
  }

  //in jsk code(what we return from render method), if we access any varibale/object with 'this.' it
  // will search outside of render method
  render() {
    // console.log(this.props.users);
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
