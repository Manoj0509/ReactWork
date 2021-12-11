import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CustomerTable extends React.Component {
  render() {
    const { customers, handleDelete } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>custId</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Role</th>
              {this.props.login.loggedIn &&
                this.props.login.role == "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {customers.map((s) => (
              <tr key={s.custId}>
                <td>{s.custId}</td>
                <td>{s.fullName}</td>
                <td>{s.login.email}</td>
                <td>{s.contactNo}</td>
                <td>{s.login.role}</td>
                {this.props.login.loggedIn && this.props.login.role == "admin" && (
                  <td>
                    <Link
                      to={`/customers/update/${s.custId}`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(s.custId)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
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

export default connect(mapStateToProps)(CustomerTable);