import * as callAction from '../../action/callAction'
import {actionType} from "./types";

const initialState = {
    localStream: null
}

const reducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case callAction.CALL_SET_LOCL_STREM:
            return {
                ...state,
                localStream: action.localStream
            }
        default:
            return state
    }
}
export default reducer