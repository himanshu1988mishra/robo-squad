import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor() {
    super()

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  componentDidCatch(error) {
    console.log(error)
  }

  render() {
    return (
      this.state.hasError ? 
      <h1 className="f2 tc" style={{color: '#f5f5f5'}}>
        <span style={{color: 'red'}}>Sorry</span> for the inconvenience...
      </h1> :
      (
        this.props.children
      )
    )
  }
}

export default ErrorBoundary;