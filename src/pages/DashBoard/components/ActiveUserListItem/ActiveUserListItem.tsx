import React, {FC} from "react";
import {activeUserType} from "../ActiveUserList/types";
import styles from './styles.module.scss';
import userAvatar from '../../../../resources/userAvatar.png';
import classNames from "classnames";
import {callToOtherUser} from "../../../../utils/webRtc/webRtcHandler";

interface activeUserListItemType {
    activeUser: activeUserType
}

const ActiveUserListItem: FC<activeUserListItemType> = ({activeUser}: activeUserListItemType) => {
    const handleListItemPressed = ()=>{
        //点击活跃用户进行呼叫
        callToOtherUser(activeUser)
    }
    return (<div className={styles.active_user_list_item} onClick={(e)=>handleListItemPressed}>
        <div className={styles.active_user_list_image_container}>
            <img className={styles.active_user_list_image} src={userAvatar} alt=""/>
        </div>
        <span className={classNames(styles.active_user_list_text,'text_main_color')}>{activeUser.username}</span>
    </div>)
}
export default ActiveUserListItem