import store from "../../store/store";
import {callState, setCallState, setLocalStream} from "../../store/action/callAction";

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