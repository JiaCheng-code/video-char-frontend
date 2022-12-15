import React, {FC} from "react";
import styles from './styles.module.scss'
import ActiveUserListItem from "../ActiveUserListItem/ActiveUserListItem";

import {useSelector} from "react-redux";
import { initialStateType} from "../../../../store/reducers/dashboardReducer/types";
import {activeUserType} from "./types";


interface useSelectorType {
    dashboard:initialStateType
}

const ActiveUserList: FC = () => {
    const activeUsers:Array<activeUserType>= useSelector<useSelectorType,Array<activeUserType>>((state):Array<activeUserType>=>{
        console.log(state)
        return state.dashboard.activeUsers
    })
    console.log(activeUsers)
    return (
        <div className={styles.active_user_list_container}>
            {
                activeUsers?.map((activeUser: activeUserType) => {
                    return <ActiveUserListItem key={activeUser.socketId} activeUser={activeUser}/>
                })
            }
        </div>
    )
}
export default ActiveUserList