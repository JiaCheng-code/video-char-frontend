import * as dashboardActions from '../../action/dashboardAction'
import {actionType, initialStateType} from "./types";

const initialState: initialStateType = {
    userName: '',
    activeUsers:[]
}

const reducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case dashboardActions.DASHBOARD_SET_USERNAME:
            return {
                ...state, userName: action.userName
            };
        case dashboardActions.DASHBOARD_SET_ACTIVE_USERS:
            return {
                ...state, activeUsers: action.activeUsers
            };
        default:
            return state
    }
}
export default reducer