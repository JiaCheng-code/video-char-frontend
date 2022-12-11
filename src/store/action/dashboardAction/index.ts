import {userNameType} from "./types";

export const DASHBOARD_SET_USERNAME: string = 'DASHBOARD_SET_USERNAME';

export const setUserName = (username: string): userNameType => {
    return {
        type: DASHBOARD_SET_USERNAME,
        username
    }
}
