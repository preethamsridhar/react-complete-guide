import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    console.log("caught the error.....")
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }
  
  render() {
    let renderingElement = '';
    console.log("inside error boundary")
    if (this.state.hasError) {
      return (
        <div>
          <h1> Something went wrong </h1>
        </div>
      )    
    }
    else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary
