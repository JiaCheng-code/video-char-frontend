import React, {FC, useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import classNames from "classnames";

import logoImage from '../../resources/logo.png'
import UserNameInput from "./components/UserNameInput/UserNameInput";
import SumbitButton from "./components/SubmitButton/SumbitButton";
import styles from './styles.module.scss'
import {useDispatch} from "react-redux";
import {setUserNameAction} from "../../store/action/dashboardAction";
import {registerNewUser} from "../../utils/wssConnection/wssConnection";


const LoginPage: FC = () => {
    let [userName, setUserName] = useState<string>('')

    let dispath = useDispatch();
    const navigate: NavigateFunction = useNavigate()

    const handleSummitButtonPressed: Function = () => {
        // 注册新用户
        registerNewUser(userName)
        // 保存用户信息
        dispath(setUserNameAction(userName))
        // 跳转
        navigate('/dashboard');
    };
    return (
        <div className={classNames(styles.loginPage, 'background_main_color')}>
            <div className={classNames(styles.loginBox, 'background_secondary_color')}>
                {/*logo*/}
                <div className={styles.logoContainer}>
                    <img className={styles.logoImage} src={logoImage} alt=""/>
                </div>
                {/*title*/}
                <div className={classNames(styles.titleContainer, 'text_main_color')}>
                    <h2>欢迎来到登录页面</h2>
                </div>
                {/*input btn*/}
                <UserNameInput userName={userName} setUserName={setUserName}/>
                {/*btn*/}
                <SumbitButton handleSummitButtonPressed={handleSummitButtonPressed}/>
            </div>


        </div>
    );
}
export default LoginPage