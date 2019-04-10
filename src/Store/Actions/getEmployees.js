import * as actionTypes from "./Action-types";
export const getDetailsStart = (id) => {
  return {
    type: actionTypes.GET_DETAILS_START,
    id
  }
};

export const getDetailsSuccess = data => ({
  type: actionTypes.GET_DETAILS_SUCCESS,
  payload: data
});

export const getDetailsFailure = error => ({
  type: actionTypes.GET_DETAILS_FAILURE,
  payload: error
});

export const clearEmployeeDetails = () => ({
  type: actionTypes.CLEAR_EMPLOYEE_DETAILS
});


