import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="John Doe"
          email="johndoe@gmail.com"
          phone="000-000-00-00"
        />
        <Contact
          name="Adam Smith"
          email="asmith@gmail.com"
          phone="000-111-00-00"
        />
      </div>
    );
  }
}

export default App;
