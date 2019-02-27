import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jonhdoe@gmail.com",
        phone: "000-111-00-00"
      },
      {
        id: 2,
        name: "Adam Smith",
        email: "asmith@gmail.com",
        phone: "000-222-00-00"
      },
      {
        id: 3,
        name: "Jason Silva",
        email: "jsilva@gmail.com",
        phone: "000-333-00-00"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
