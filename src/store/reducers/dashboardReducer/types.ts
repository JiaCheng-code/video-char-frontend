import {activeUserType} from "../../../pages/DashBoard/components/ActiveUserList/types";
import {userNameType} from "../../action/dashboardAction/types";

export interface initialStateType {
    userName: string,
    activeUsers: Array<activeUserType>
}
export interface actionType {
    type:string
    userName: userNameType
    activeUsers: activeUserType
}
