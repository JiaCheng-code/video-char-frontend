import React, {FC, useState} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

import logoImage from '../../resources/logo.png'
import UserNameInput from "./components/UserNameInput/UserNameInput";

const LoginPage: FC = () => {
    let [userName,setUserName] = useState<string>('')
    return (
        <div className={classNames(styles.loginPage, 'background_main_color')}>
            <div className={classNames(styles.loginBox,'background_secondary_color')}>
                {/*logo*/}
                <div className={styles.logoContainer}>
                    <img className={styles.logoImage} src={logoImage} alt=""/>
                </div>
                {/*title*/}
                <div className={classNames(styles.titleContainer,'text_main_color')}>
                    <h2>欢迎来到登录页面</h2>
                </div>
                {/*input btn*/}
                <UserNameInput userName={userName} setUserName={setUserName}/>
            </div>


        </div>
    )
}
export default LoginPage