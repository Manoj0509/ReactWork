import React, { Component } from "react";
import axios from "axios";

class UpdateCustomer extends React.Component {
  state = {
    customer: {
      fullName: "",
      email: "",
      role: "",
      contactNo: "",
      loginId: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8082/customers/rollNo/${this.props.match.params.rollNo}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ customer: res.data });
      })
      .catch((err) => console.log(err));
  }
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
    axios
    .put(
      `http://localhost:8088/onlinesportshopee/products/updateproduct/{productId}/${this.props.match.params.productId}`,
      this.state.products
  )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated customer " + this.state.customer.fullName + " successfully!"
        );
        this.props.history.push("/customers");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const { fullName, email, password, role, contactNo } = this.state.customer;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
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

export default UpdateCustomer;