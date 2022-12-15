import React, {FC} from "react";
import styles from './styles.module.scss'
import ActiveUserListItem from "../ActiveUserListItem/ActiveUserListItem";
import {activeUserType} from "./types";



const activeUsers: Array<activeUserType> = [
    {
        socketId: 123,
        username: 'Summer'
    }, {
        socketId: 234,
        username: 'Henry'
    }, {
        socketId: 345,
        username: 'Lucy'
    }, {
        socketId: 456,
        username: 'Jhon'
    },

]


const ActiveUserList: FC = () => {
    return (
        <div className={styles.active_user_list_container}>
            {
                activeUsers.map((activeUser: activeUserType) => {
                    return <ActiveUserListItem key={activeUser.socketId} activeUser={activeUser}/>
                })
            }
        </div>
    )
}
export default ActiveUserList