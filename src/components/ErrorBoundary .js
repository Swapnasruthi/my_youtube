import React from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleNavigateHome = () => {
    this.setState({ hasError: false });
    this.props.navigate("/");
    this.window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>Oops! Something went wrong.</h1>
          <p>{this.state.error?.message}</p>
          <button onClick={this.handleNavigateHome} style={{ padding: "10px 20px", cursor: "pointer" }}>
            Go to Home Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorBoundary = ({ children }) => {
  const navigate = useNavigate();
  return <ErrorBoundaryClass navigate={navigate}>{children}</ErrorBoundaryClass>;
};

export default ErrorBoundary;
