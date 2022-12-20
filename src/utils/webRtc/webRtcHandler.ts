import store from "../../store/store";
import {
    callState,
    setCallerUsername,
    setCallingDialogVisble,
    setCallState,
    setLocalStream
} from "../../store/action/callAction";
import {activeUserType} from "../../pages/DashBoard/components/ActiveUserList/types";
import * as wss from '../wssConnection/wssConnection'
import {handlePreOfferType} from "./types";

const defaultConstrains = {
    audio:true,
    video:true
}
// 获取本地媒体流，报存到redux
export const getLocalStream = ()=>{
    navigator.mediaDevices.getUserMedia(defaultConstrains).then(stream=>{
        store.dispatch(setLocalStream(stream))
        store.dispatch(setCallState(callState.CALL_AVAILABLE))
    }).catch((error)=>{
        console.log('获取本地媒体流信息失败',error)
    })
}

// 呼叫某个用户,获取应答者信息
let connectUserSocketId;
export const callToOtherUser = (calleeDetails:activeUserType)=>{
    connectUserSocketId = calleeDetails.socketId;
    // 更新呼叫状态:呼叫进行中
    store.dispatch(setCallState(callState.CALL_IN_PROGRESS))
    // 显示呼叫对话框
    store.dispatch(setCallingDialogVisble(true))

    const {getState}:any = store;
    wss.sendPreOffer({
        callee:calleeDetails,
        caller:{
            username:getState().dashboard.username
        }
    })
}

// 处理从访问返回的呼叫者的数据，并存储它的sockid以及callerusername
export const handlePreOffer = (data:handlePreOfferType)=>{
    connectUserSocketId = data.callerSocketId
    // 更新store中的callerUsername
    store.dispatch(setCallerUsername(data.callerUsername))
    // 更新store中的callstate：requested
    store.dispatch(setCallState(callState.CALL_REQUESTED))
}