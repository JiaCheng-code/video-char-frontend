// 本地媒体流
import {callStateType} from "./types";

export const CALL_SET_LOCL_STREM = 'CALL_SET_LOCL_STREM'
// 远端媒体流
export const CALL_SET_REMOTE_STREAM = 'CALL_SET_REMOTE_STREAM';
export const CALL_SET_CALL_STATE  = 'CALL_SET_CALL_STATE'
/*
* 呼叫状态
* CALL_UNAVATLABLE 不可用，没有获取媒体流
* CALL_AVAILABLE：可用
* CALL_REQUESTED: 发起请求
* CALL_IN_PROGRESS 正在进行
* */
export const callState = {
    CALL_UNAVATLABLE : 'CALL_UNAVATLABLE',
    CALL_AVAILABLE :'CALL_AVAILABLE',
    CALL_REQUESTED:'CALL_REQUESTED',
    CALL_IN_PROGRESS:'CALL_IN_PROGRESS'
}

// 本地媒体流
export const setLocalStream = (localStream: MediaStream) => {
    return {
        type: CALL_SET_LOCL_STREM,
        localStream
    }
}

//设置远端发送的stream媒体流
export const setRemoteStream = (remoteStream: MediaStream) => {
    return {
        type: CALL_SET_REMOTE_STREAM,
        remoteStream,
    };
};

export const setCallState = (callState: string)=>{
    return {
        type:CALL_SET_CALL_STATE,
        callState
    }
}