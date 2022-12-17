import React, {FC} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

const CallRejectDialog:FC = ()=>{
    return (
        <div className={classNames(styles.call_rejected_dialog,'background_secondary_color')}>
            <span>Call Rejected</span>
        </div>
    )
}
export default CallRejectDialog