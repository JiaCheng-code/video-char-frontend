import store from "../../store/store";
import {setLocalStream} from "../../store/action/callAction";

const defaultConstrains = {
    audio:true,
    video:true
}
export const getLocalStream = ()=>{
    navigator.mediaDevices.getUserMedia(defaultConstrains).then(stream=>{
        store.dispatch(setLocalStream(stream))
    }).catch((error)=>{
        console.log('获取本地媒体流信息失败',error)
    })
}