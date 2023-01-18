import store from "../../store/store";
import {
    callState,
    setCallerUsername,
    setCallingDialogVisble, setCallRejected,
    setCallState,
    setLocalStream
} from "../../store/action/callAction";
import {activeUserType} from "../../pages/DashBoard/components/ActiveUserList/types";
import * as wss from '../wssConnection/wssConnection'
import {handlePreOfferType, handlePreOfferAnswerType} from "./types";

const defaultConstrains = {
    audio: true,
    video: true
}
// 定义预呼叫回复状态
const preOfferAnswers = {
    CALL_ACCEPTED: 'CALL_ACCEPTED',
    CALL_REJECTED: 'CALL_REJECTED',
    CALL_NOT_AVAILABLE: 'CALL_NOT_AVAILABLE'
}
// 获取本地媒体流，报存到redux
export const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia(defaultConstrains).then(stream => {
        store.dispatch(setLocalStream(stream))
        store.dispatch(setCallState(callState.CALL_AVAILABLE))
    }).catch((error) => {
        console.log('获取本地媒体流信息失败', error)
    })
}

// 呼叫某个用户,获取应答者信息
let connectUserSocketId: string | number ;
export const callToOtherUser = (calleeDetails: activeUserType) => {
    connectUserSocketId = calleeDetails.socketId;
    // 更新呼叫状态:呼叫进行中
    store.dispatch(setCallState(callState.CALL_IN_PROGRESS))
    // 显示呼叫对话框
    store.dispatch(setCallingDialogVisble(true))

    const {getState}: any = store;
    console.log(getState().dashboard.username)
    wss.sendPreOffer({
        callee: calleeDetails,
        caller: {
            username: getState().dashboard.username
        }
    })
}

// 处理从访问返回的呼叫者的数据，并存储它的sockid以及callerusername
export const handlePreOffer = (data: handlePreOfferType) => {
    console.log(checkIfCallPossible())
    // 边界判断是否有其他因素影响通信
    if (checkIfCallPossible()) {
        console.log(data)
        connectUserSocketId = data.callerSocketId
        // 更新store中的callerUsername
        store.dispatch(setCallerUsername(data.callerUsername))
        // 更新store中的callstate：requested
        store.dispatch(setCallState(callState.CALL_REQUESTED))
    } else {
        // 受客观因素影响，通过服务器像发送方回复
        wss.sendPreOfferAnswer({
            callerSocketId: data.callerSocketId,
            answer: preOfferAnswers.CALL_NOT_AVAILABLE
        })
    }

}
export const checkIfCallPossible = (): boolean => {
    const {getState}: any = store;
    if (getState().call.localStream === null || getState().call.callState !== callState.CALL_AVAILABLE) {
        return false
    } else {
        return true
    }
}
// 创建处理handlePreOfferAnswer的函数
export const handlePreOfferAnswer = (data: handlePreOfferAnswerType) => {
    store.dispatch(setCallingDialogVisble(false))
    console.log(123)
    // 验证answer结果，结果为CALL_ACCEPTED
    if (data.answer === preOfferAnswers.CALL_ACCEPTED) {
        // 进入webRTC逻辑

    } else {
        // 拒绝理由
        let rejectedReason;
        if (data.answer === preOfferAnswers.CALL_NOT_AVAILABLE) {
            rejectedReason = "应答方现在无法接听电话"
        } else {
            rejectedReason = "应答方拒绝你的呼叫"
        }
        // dispath拒绝接听的action
        store.dispatch(setCallRejected({
            rejected: true,
            reason: rejectedReason || ''
        }))
        resetCallData()
    }

}
// 定义接受呼叫请求的函数
export const acceptIncomingCallRequest = () => {
    wss.sendPreOfferAnswer({
        callerSocketId: connectUserSocketId,
        answer: preOfferAnswers.CALL_ACCEPTED
    })
}
// 拒绝呼叫
export const rejectIncomingCallRequest = ()=>{
    wss.sendPreOfferAnswer({
        callerSocketId: connectUserSocketId,
        answer: preOfferAnswers.CALL_REJECTED
    })
    // 拒绝之后重置
    resetCallData()
}
// 定义重置呼叫函数
export const resetCallData = ()=>{
    connectUserSocketId = '';
    store.dispatch(setCallState(callState.CALL_AVAILABLE))
}