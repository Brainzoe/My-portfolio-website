import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // This method updates state when an error is caught
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // You can use this to log the error to an error reporting service
  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo);
    // You can also log errorInfo to a service like Sentry here
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error is caught
      return (
        <div className="p-4 bg-red-100 text-red-600">
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }

    // If no error, render children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
