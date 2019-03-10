import React, { Component } from "react";

class Test extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then(response => response.json())
      .then(data => this.setState({ name: data.name, email: data.email }));
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    );
  }
}
export default Test;
