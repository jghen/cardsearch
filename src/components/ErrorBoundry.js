import React from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render(){
    if (this.state.hasError) {
      return <h1>Oopps. Page did not load... Please reload.</h1>
    }
    return this.props.children
  }

}

export default ErrorBoundry;
