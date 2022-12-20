import {activeUserType} from "../../pages/DashBoard/components/ActiveUserList/types";
import store from "../../store/store";

export interface broadcastType {
    event: string,
    activeUsers: Array<activeUserType>
}

export interface preOfferType{
    callee:activeUserType,
    caller:callerType
}
interface callerType{
    username:string
}