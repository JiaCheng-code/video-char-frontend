import {activeUserType} from "../../pages/DashBoard/components/ActiveUserList/types";

export interface broadcastType {
    event: string,
    activeUsers: Array<activeUserType>
}