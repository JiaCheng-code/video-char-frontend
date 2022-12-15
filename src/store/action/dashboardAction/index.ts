import {userNameType} from "./types";
import {activeUserType} from "../../../pages/DashBoard/components/ActiveUserList/types";

export const DASHBOARD_SET_USERNAME: string = 'DASHBOARD_SET_USERNAME';
export const DASHBOARD_SET_ACTIVE_USERS  = 'DASHBOARD_SET_ACTIVE_USERS '

// 设置用户名
export const setUserNameAction = (userName: string): userNameType => {
    return {
        type: DASHBOARD_SET_USERNAME,
        userName
    }
}

export  const setActiveUsers = (activeUsers:Array<activeUserType>)=>{
    return {
        type: DASHBOARD_SET_ACTIVE_USERS,
        activeUsers
    }
}
