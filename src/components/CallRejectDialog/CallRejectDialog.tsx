import React, {FC, useEffect} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import {clearTimeout} from "timers";

interface CallRejectDialogType {
    reason: string,
    hideCallRejectedDialog: Function
}

const CallRejectDialog: FC<CallRejectDialogType> = ({reason, hideCallRejectedDialog}: CallRejectDialogType) => {
    useEffect(() => {
         setTimeout(() => {
            hideCallRejectedDialog({
                rejected: false,
                reason: ''
            })
        }, 4000)
        // return () => {
        //     clearTimeout(time_id)
        // }

    }, [])
    return (
        <div className={classNames(styles.call_rejected_dialog, 'background_secondary_color')}>
            <span>{reason}</span>
        </div>
    )
}
export default CallRejectDialog