import {DefaultEventsMap} from '@socket.io/component-emitter';
import socketClient, {Socket} from 'socket.io-client';
import {broadcastType} from "./types";
import store from "../../store/store";
import {setActiveUsers} from "../../store/action/dashboardAction";
import {activeUserType} from "../../pages/DashBoard/components/ActiveUserList/types";

const SERVER: string = 'http://localhost:8000';
const broadcastEventType = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
}

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export const connectWithSocket = (): void => {
    socket = socketClient(SERVER)
    socket.on('connection', () => {
        console.log("WebSocket connection success");
        console.log(socket.id)
    })
    // 监听服务器的广播获取活跃用户数组
    socket.on('broadcast',(data:broadcastType)=>{
        // 将用户放在store中
        handleBroadcastEvents(data)
    })
}
// 注册新用户
export const registerNewUser = (username: string) => {
    socket.emit('register-mew-user', {
        username,
        socketId: socket.id
    })
}

const handleBroadcastEvents = (data:broadcastType)=>{
    switch (data.event) {
        case broadcastEventType.ACTIVE_USERS:
            const activeUsers = data.activeUsers.filter((activeUser:activeUserType)=>{
                return activeUser.socketId!==socket.id
            })
            return store.dispatch(setActiveUsers(activeUsers))
    }
}
