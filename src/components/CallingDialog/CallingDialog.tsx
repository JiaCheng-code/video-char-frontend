import React, {FC} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

const CallingDialog: FC = () => {
    return (
        <div className={classNames(styles.directCallingDialog,'background_secondary_color')}>
            <span>Calling</span>
        </div>
    )
}
export default CallingDialog