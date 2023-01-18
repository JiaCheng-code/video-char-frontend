import {DefaultEventsMap} from '@socket.io/component-emitter';
import socketClient, {Socket} from 'socket.io-client';
import {broadcastType, preOfferType, sendPreOfferAnswerType} from "./types";
import store from "../../store/store";
import {setActiveUsers} from "../../store/action/dashboardAction";
import {activeUserType} from "../../pages/DashBoard/components/ActiveUserList/types";
import * as webRTCHandler from '../webRtc/webRtcHandler'

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
    // 应答方监听从服务器返回的呼叫者传递的data数据
    socket.on('pre-offer',(data)=>{
        webRTCHandler.handlePreOffer(data)
    })
    // 呼叫方监听从服务器回复的data数据
    socket.on('pre-offer-answer',(data)=>{
        webRTCHandler.handlePreOfferAnswer(data)
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

//向服务器发送预呼叫数据
export const sendPreOffer = (data:preOfferType)=>{
    socket.emit('pre-offer',data)
}

// 向服务器发送预呼叫处理
export const sendPreOfferAnswer = (data:sendPreOfferAnswerType)=>{
    socket.emit('pre-offer-answer',data)
}
