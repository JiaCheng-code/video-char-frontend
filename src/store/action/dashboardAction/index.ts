import {userNameType} from "./types";

export const DASHBOARD_SET_USERNAME: string = 'DASHBOARD_SET_USERNAME';

export const setUserNameAction = (userName: string): userNameType => {
    return {
        type: DASHBOARD_SET_USERNAME,
        userName
    }
}
