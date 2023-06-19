import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  // it will catch any error warpped by children component,,
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      console.log("error handler");
      return <p> Something went wrong</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
