import * as callAction from '../../action/callAction'
import {actionType} from "./types";

const initialState = {
    localStream: null,
    remoteStream: null,
}

const reducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case callAction.CALL_SET_LOCL_STREM:
            return {
                ...state,
                localStream: action.localStream
            }
        case callAction.CALL_SET_REMOTE_STREAM:
            return {
                ...state,
                remoteStream: action.remoteStream,
            };
        default:
            return state
    }
}
export default reducer