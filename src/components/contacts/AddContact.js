import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = { name: "", email: "", phone: "", errors: {} };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone number is required" } });
    }

    const { name, email, phone } = this.state;

    const newContact = { id: uuid.v4(), name, email, phone };
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    //Clear state after adding new contact
    this.setState({ name: "", email: "", phone: "", errors: {} });
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    className="btn btn-light btn-block"
                    type="submit"
                    value="Add contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
