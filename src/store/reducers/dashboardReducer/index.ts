import * as dashboardActions from '../../action/dashboardAction'
import {userNameType} from "../../action/dashboardAction/types";
import {initialStateType} from "./types";

const initialState: initialStateType = {
    userName: ''
}

const reducer = (state = initialState, action: userNameType) => {
    switch (action.type) {
        case dashboardActions.DASHBOARD_SET_USERNAME:
            return {
                ...state, userName: action.userName
            };
        default:
            return state
    }
}
export default reducer