import React, {FC} from "react";
import styles from './styles.module.scss'
import {UserNameTypes} from "./types";
import classNames from "classnames";

const UserNameInput: FC<UserNameTypes> = ({userName, setUserName}: UserNameTypes) => {
    return (
        <div className={styles.loginPageInput_container}>
            <input className={classNames(styles.loginPageInput,'background_main_color','text_main_color')} type="text" value={userName} placeholder='请输入你的昵称' onChange={(e) => setUserName(e.target.value)}/>
        </div>
    )
}
export default UserNameInput