import React, {FC} from "react";
import {useSelector} from "react-redux";
import {actionType} from "../../../../store/reducers/callReducer/types";
import LocalVideoView from "../LocalVideoView/LocalVideoView";
import CallRejectDialog from "../../../../components/CallRejectDialog/CallRejectDialog";
import IncomingCallDialog from "../../../../components/IncomingCallDialog/IncomingCallDialog";
import CallingDialog from "../../../../components/CallingDialog/CallingDialog";
import {callState as callStateAction} from "../../../../store/action/callAction";

interface callSelectorType {
    call: actionType
}

const DirectCall: FC = () => {
    const callData: actionType = useSelector<callSelectorType, actionType>((state) => {
        return state.call
    })
    const {localStream, remoteStream, callerUserName, callState, callingDialogVisible}:actionType = callData

    return (
        <>
            <LocalVideoView localStream={localStream}/>
            {/*<CallRejectDialog/>*/}
            {(callState === callStateAction.CALL_REQUESTED) && <IncomingCallDialog callerUserName={callerUserName}/>}
            {callingDialogVisible && <CallingDialog/>}
        </>
    )
}
export default DirectCall