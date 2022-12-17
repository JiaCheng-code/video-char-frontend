import React, {FC} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

const IncomingCallDialog: FC = () => {
    const handleAcceptButtonPressed = () => {
        // 接听呼叫
    }
    const handleRejectButtonPressed = () => {
        // 拒绝呼叫
    }
    return (
        <div className={classNames(styles.direct_calling_dialog, 'background_secondary_color')}>
            <span className={styles.direct_call_dialog_caller_name}>Summer的来电</span>
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