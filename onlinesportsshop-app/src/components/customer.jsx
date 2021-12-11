import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CustomerTable from "./customertable";
import { connect } from "react-redux";

class Customer extends React.Component {
  state = {
    customers: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8088/onlinesportshopee/customers/Customers")
      .then((res) => {
        console.log(res);
        this.setState({ customers: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (custId) => {
    //axios.delete("http://localhost:8082/customers/" + custId);
    axios
      .delete(`http://localhost:8088/onlinesportshopee/customers/removeCustomer/Customer/${custId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const customers = this.state.customers.filter((s) => s.custId != custId);
        this.setState({ customers: customers });
        alert(res.data.fullName + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        {this.props.login.loggedIn && this.props.login.role == "admin" && (
          <Link to="/customers/add" className="btn btn-info float-end">
            Add
          </Link>
        )}
        <customerTable
          customers={this.state.customers}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Customer);