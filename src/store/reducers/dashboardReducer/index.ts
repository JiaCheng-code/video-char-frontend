import * as dashboardActions from '../../action/dashboardAction'
import {userNameType} from "../../action/dashboardAction/types";
import {initialStateType} from "./types";

const initialState: initialStateType = {
    username: ''
}

const reducer = (state = initialState, action: userNameType) => {
    switch (action.type) {
        case dashboardActions.DASHBOARD_SET_USERNAME:
            return {
                ...state, username: action.username
            };
        default:
            return state
    }
}
export default reducer