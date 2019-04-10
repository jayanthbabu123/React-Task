import React, { Component } from "react";
import Filters from "../Employee/Employee";
import Users from "../../Components/Users/user";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-container ">
          <div className="main-box ms-bgColor-themeLighter">
            <div className="ms-font-xxl text-center ms-fontColor-themePrimary">
              Employee Details
            </div>
            <div className="text-center ms-fontColor-orangeLight">
              Select an Employee to see employee details
            </div>
          </div>

          <div className="ms-Grid content-box" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg5">
                <Filters />
              </div>
              <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg6">
                <Users />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
