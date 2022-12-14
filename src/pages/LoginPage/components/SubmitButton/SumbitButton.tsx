import React, {FC} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

export interface SumbitButtonTypes {
    handleSummitButtonPressed: Function
}

const SumbitButton: FC<SumbitButtonTypes> = ({handleSummitButtonPressed}: SumbitButtonTypes) => {
    return (
        <div className={styles.loginPageButton_container}>
            <button className={classNames(styles.loginPage_button, 'background_main_color', 'text_main_color')}
                    onClick={(e) => (handleSummitButtonPressed())}>点击进入视频聊天
            </button>
        </div>
    )
}

export default SumbitButton