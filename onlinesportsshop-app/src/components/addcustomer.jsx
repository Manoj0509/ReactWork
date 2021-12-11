import axios from "axios";
import React, { Component } from "react";
import Joi from "joi-browser";

class AddCustomer extends React.Component {
  state = {
    customer: {
      fullName: "",
      email: "",
      password: "",
      role: "",
      contactNo: "",
    },
    errors: {},
    errMsg: "",
  };
  // define schema to validate input field values
  schema = {
    fullName: Joi.string().min(3).max(20).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(3).required(),
    contactNo: Joi.number()
      .integer()
      .min(9999999900)
      .max(9999999999)
      .required(),
    role: Joi.string().required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.customer, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = (event) => {
    //logic to update state object
    // console.log(customer);
    // console.log(event.target.name); // name of field - fullName
    // console.log(event.target.value); // value entered in the field -a
    // customer[fullName] = a;
    // customer.fullName = a;

    // copy state customer object to local variable customer
    const customer = { ...this.state.customer };

    // update local customer object with values entered by user
    customer[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ customer: customer });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
      .post("http://localhost:8082/customers", this.state.customer)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added customer " + this.state.customer.fullName + " successfully!"
        );
        this.props.history.push("/customers");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };

  render() {
    // Object Destructuring
    const { fullName, email, password, role, contactNo } = this.state.customer;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3>Add customer</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form
          onSubmit={this.handleSubmit}
          className="shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              aria-describedby="emailHelp"
              value={fullName}
              name="fullName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.fullName}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.email}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.password}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="contactNo" className="form-label">
              Contact No
            </label>
            <input
              type="tel"
              className="form-control"
              id="contactNo"
              aria-describedby="emailHelp"
              value={contactNo}
              name="contactNo"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.contactNo}</small>}
          </div>
          <select
            className="form-select text-center"
            aria-label="Default select example"
            value={role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="admin">Admin</option>
            <option value="customer">customer</option>
          </select>
          {errors && <small>{errors.role}</small>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCustomer;