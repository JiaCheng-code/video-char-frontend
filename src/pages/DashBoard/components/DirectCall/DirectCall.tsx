import React, {FC} from "react";
import {useSelector} from "react-redux";
import {actionType} from "../../../../store/reducers/callReducer/types";
import LocalVideoView from "../LocalVideoView/LocalVideoView";
import CallRejectDialog from "../../../../components/CallRejectDialog/CallRejectDialog";
import IncomingCallDialog from "../../../../components/IncomingCallDialog/IncomingCallDialog";
import CallingDialog from "../../../../components/CallingDialog/CallingDialog";


interface callSelectorType {
    call: actionType
}

const DirectCall: FC = () => {
    const localStream = useSelector<callSelectorType, MediaStream | null>((state): MediaStream | null => {
        return state.call.localStream
    })

    return (
        <>
            <LocalVideoView localStream={localStream}/>
            {/*<CallRejectDialog/>*/}
            {/*<IncomingCallDialog/>*/}
            {/*<CallingDialog />*/}
        </>
    )
}
export default DirectCall