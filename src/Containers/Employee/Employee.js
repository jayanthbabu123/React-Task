import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetailsStart, clearEmployeeDetails } from "../../Store/Actions/index";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
// import { bindActionCreators } from "redux";

const departments = [{ text: "HR", key: "HR" }, { text: "ENGINEERING", key: "ENGINEERING" }];
const employeeId = {
  HR: [
    { text: "1", key: "1" },
    { text: "2", key: "2" },
    { text: "3", key: "3" },
    { text: "4", key: "4" },
    { text: "5", key: "5" }
  ],
  ENGINEERING: [
    { text: "6", key: "6" },
    { text: "7", key: "7" },
    { text: "8", key: "8" },
    { text: "9", key: "9" },
    { text: "10", key: "10" }
  ]
};
const dropdownStyles = {
  dropdown: { width: 300 }
};
class Employee extends Component {
  state = {
    selectedOption: "",
    empId: "",
    selectedValue: []
  };
  handleOnchange = (event, item) => {
    this.setState({
      selectedOption: item.text,
      selectedValue: employeeId[item.text]
    });
  };
  handleEmployee = (event, item) => {
    this.setState({
      empId: item.text,
      selectedValue: employeeId[this.state.selectedOption]
    });
  };

  getEmployeeDetails = () => {
    if (this.state.empId) {
      this.props.getDetailsStart(this.state.empId);
      //this.props.getemployeeData();
    }
  };

  cleardetails = () => {
    this.setState({ selectedOption: null, empId: null });
    this.props.clearEmployeeDetails();
  };

  render() {
    const { selectedOption, selectedValue } = this.state;
    return (
      <React.Fragment>
        <div className={"drop-section"}>
          <Stack tokens={{ childrenGap: 5 }}>
            <Dropdown
              label="Select Department"
              placeholder="Select Department"
              options={departments}
              styles={dropdownStyles}
              value={selectedOption}
              onChange={this.handleOnchange}
              name="selectedOption"
              ariaLabel={selectedOption}
              required={true}
            />

            <Dropdown
              placeholder="Select Employee Id"
              label="Select Employee"
              options={selectedValue}
              styles={dropdownStyles}
              value={selectedOption}
              onChange={this.handleEmployee}
              name="empId"
              required={true}
            />
          </Stack>
          <div style={{ marginTop: "35px" }}>
            <DefaultButton
            style={{marginRight:"10px"}}
              text="Get Details"
              primary={true}
              onClick={this.getEmployeeDetails}
            />
            <DefaultButton text="Clear" onClick={this.cleardetails} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { getDetailsStart, clearEmployeeDetails }
)(Employee);
