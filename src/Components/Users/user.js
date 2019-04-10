import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

class Users extends Component {
  displayUser = data =>
    data && (
      <div className="panel">
        <img src={data.avatar} className="image-sec" alt="logo" height="250" width="100%" />
        <div className="ms-font-l">
          Emplyee Id : <span className=" ms-fontColor-themePrimary">{data.id}</span>
        </div>
        <div className="ms-font-l">
          Employee Name :<span className=" ms-fontColor-themePrimary"> {`${data.first_name} ${data.last_name}`}</span>
        </div>
      </div>
    );
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        {this.props.employeeData ? (
          this.displayUser(this.props.employeeData)
        ) : this.props.loading ? (
          <div className="empty-box">
            <div style={{ textAlign: "center" }}>
              <Loader type="Circles" color="#00BFFF" height="50" width="50" />{" "}
            </div>
          </div>
        ) : (
          <div className="empty-box">
            <div style={{ textAlign: "center" }}>
              Selected Employee details will disply here
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  employeeData: state.employees.employeeData,
  loading: state.employees.loading
});

export default connect(mapStateToProps)(Users);
