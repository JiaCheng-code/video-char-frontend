import React, {FC} from "react";
import {useSelector} from "react-redux";
import {actionType} from "../../../../store/reducers/callReducer/types";
import LocalVideoView from "../LocalVideoView/LocalVideoView";


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
        </>
    )
}
export default DirectCall