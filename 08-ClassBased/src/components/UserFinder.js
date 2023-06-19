// import { Fragment, useState, useEffect } from "react";

// import Users from "./Users";
// import classes from "./UserFinder.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

// export default UserFinder;

import Users from "./Users";
import UserContext from "../store/user-context";
import classes from "./UserFinder.module.css";
import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
class UserFinder extends Component {
  static contextType = UserContext;

  constructor() {
    super();
    this.state = {
      filteredSearch: [],
      searchTerm: "",
    };
  }

  //   filterUsers(event) {
  //     let filteredSearch = this.DUMMY_USERS.filter((user) => {
  //       return user.name.includes(searchTerm);
  //     });
  //     this.setState({ filteredSearch: [...filteredSearch] });
  //   }

  // this is same as , useEffect({},[]) , ie runs one time only at initial render
  componentDidMount() {
    console.log("UserFinder Mounted");
    this.setState({ filteredSearch: this.context.users });
  }
  // it is same as useEffect({},[anyVariable])
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm != this.state.searchTerm) {
      let filteredSearch = this.context.users.filter((user) => {
        return user.name.includes(this.state.searchTerm);
      });
      this.setState({ filteredSearch: [...filteredSearch] });
    }
  }
  searchChangeHandler(event) {
    console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="text" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredSearch} />
        </ErrorBoundary>
      </>
    );
  }
}

export default UserFinder;

// both are equal
//this.filterUsers.bind(this)
// (e) => { this.filterUsers(e);}
