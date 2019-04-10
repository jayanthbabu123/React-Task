import * as actionTypes from '../Actions/Action-types'

const initialState = {
    employeeData: null,
    loading: false,
    error: null
}

const setUsersData = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAILS_START:
            return {
                ...state,
                loading: true,
                employeeData: null
            }
        case actionTypes.GET_DETAILS_SUCCESS:
            return {
                ...state,
                employeeData: action.payload,
                loading: false
            }
        case actionTypes.GET_DETAILS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                employeeData: null
            }
        case actionTypes.CLEAR_EMPLOYEE_DETAILS:
            return {
                ...state,
                employeeData: null
            }
        default: return state;
    }
};
export default setUsersData;