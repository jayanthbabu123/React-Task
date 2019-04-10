import 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

import { map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import * as actionTypes from "../Actions/Action-types";


export const getEmployeeDetails = action$ => {
    return action$.pipe(
        ofType(actionTypes.GET_DETAILS_START),
        mergeMap(q => {
            return ajax.getJSON(`https://reqres.in/api/users/${q.id}`).pipe(
                map(response => {
                    return Object.assign({}, q, { type: actionTypes.GET_DETAILS_SUCCESS, payload: response.data });
                })
            )
        })
    )

}

export const rootEpic = combineEpics(
    getEmployeeDetails
);
