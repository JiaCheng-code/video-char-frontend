import React, {FC} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import {acceptIncomingCallRequest, rejectIncomingCallRequest} from "../../utils/webRtc/webRtcHandler";

interface IncomingCallDialogType{
    callerUserName:string
}

const IncomingCallDialog: FC<IncomingCallDialogType> = ({callerUserName}:IncomingCallDialogType) => {
    const handleAcceptButtonPressed = () => {
        // 接听呼叫
        acceptIncomingCallRequest()
    }
    const handleRejectButtonPressed = () => {
        // 拒绝呼叫
        rejectIncomingCallRequest()
    }
    return (
        <div className={classNames(styles.direct_calling_dialog, 'background_secondary_color')}>
            <span className={styles.direct_call_dialog_caller_name}>{callerUserName}的来电</span>
            <div className={styles.direct_call_dialog_button_container}>
                <button className={styles.direct_call_dialog_accept_button}
                        onClick={(e) => handleAcceptButtonPressed()}>接听
                </button>
                <button className={styles.direct_call_dialog_reject_button}
                        onClick={(e) => handleRejectButtonPressed()}>拒绝
                </button>
            </div>
        </div>
    )
}
export default IncomingCallDialog