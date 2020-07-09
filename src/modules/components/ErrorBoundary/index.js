import React, { Component } from "react";
import "./index.css";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-message">
          <h2>An error occurred. Please reload the page to continue!</h2>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
