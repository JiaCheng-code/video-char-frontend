import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionType, callRejectedType} from "../../../../store/reducers/callReducer/types";
import LocalVideoView from "../LocalVideoView/LocalVideoView";
import CallRejectDialog from "../../../../components/CallRejectDialog/CallRejectDialog";
import IncomingCallDialog from "../../../../components/IncomingCallDialog/IncomingCallDialog";
import CallingDialog from "../../../../components/CallingDialog/CallingDialog";
import {callState as callStateAction, setCallRejected} from "../../../../store/action/callAction";

interface callSelectorType {
    call: actionType
}

const DirectCall: FC = () => {
    const callData: actionType = useSelector<callSelectorType, actionType>((state) => {
        return state.call
    })
    const {
        localStream,
        remoteStream,
        callerUserName,
        callState,
        callingDialogVisible,
        callRejected
    }: actionType = callData
    let dispath = useDispatch();
    const hideCallRejectedDialog :Function = (callRejecttedDetails:callRejectedType)=>{
        dispath(setCallRejected(callRejecttedDetails))
    }

    return (
        <>
            <LocalVideoView localStream={localStream}/>
            {/* 不同状态下直接呼叫*/}
            {callRejected.rejected && <CallRejectDialog reason={callRejected.reason} hideCallRejectedDialog={hideCallRejectedDialog}/>}
            {(callState === callStateAction.CALL_REQUESTED) && <IncomingCallDialog callerUserName={callerUserName}/>}
            {callingDialogVisible && <CallingDialog/>}
        </>
    )
}
export default DirectCall