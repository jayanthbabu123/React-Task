import { combineReducers } from 'redux';
import setUsersData from './getEmployeeReducer';

const commonReducers = combineReducers({
    employees: setUsersData
})


export const rootReducer = (state, action) => {
    return commonReducers(state, action)
}
