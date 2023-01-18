import * as callAction from '../../action/callAction'
import {actionType} from "./types";
import { callState} from "../../action/callAction";

const initialState = {
    localStream: null,
    remoteStream: null,
    callState: callState.CALL_UNAVATLABLE,
    callingDialogVisible: false,
    callerUserName: '',
    callRejected: {
        rejected: false,
        reason: ''
    }
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
        case callAction.CALL_SET_CALL_STATE:
            return {
                ...state,
                callState: action.callState,
            };
        case callAction.CALL_SET_CALLING_DIALOG_VISIBLE:
            console.log(action.callingDialogVisible)
            return {
                ...state,
                callingDialogVisible: action.callingDialogVisible,
            };
        case callAction.CALL_SET_CALLER_USERNAME:
            return {
                ...state,
                callerUserName: action.callerUserName,
            };
        case callAction.CALL_SET_CALL_REJECTED:
            return {
                ...state,
                callRejected: action.callRejected,
            };
        default:
            return state
    }
}
export default reducer