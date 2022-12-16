import React, {FC, useEffect, useRef} from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import logo from '../../resources/logo.png'
import ActiveUserList from "./components/ActiveUserList/ActiveUserList";
import {getLocalStream} from "../../utils/webRtc/webRtcHandler";

const DashBoard:FC = ()=>{
    const firstRenderRef = useRef<boolean>(true)
    useEffect(()=>{
        if(firstRenderRef.current){
            firstRenderRef.current = false
            return;
        }
        getLocalStream()
    },[])
    return (
        <div className={classNames(styles.dashboard_container,'background_main_color')}>
            <div className={styles.dashboard_left}>
                <div className={styles.dashboard_content}>
                    内容
                </div>
                <div className={classNames(styles.dashboard_rooms,'background_secondary_color')}>
                    房间
                </div>
            </div>
            <div className={classNames(styles.dashboard_right,'background_secondary_color')}>
                <div className={styles.dashboard_active_users_list}>
                    <ActiveUserList/>
                </div>
                <div className={styles.dashboard_logo_container}>
                    <img className={styles.dashboard_logo_image} src={logo} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default DashBoard