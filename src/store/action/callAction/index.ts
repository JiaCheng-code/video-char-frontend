export const CALL_SET_LOCL_STREM = 'CALL_SET_LOCL_STREM'

export const CALL_SET_REMOTE_STREAM = 'CALL_SET_REMOTE_STREAM';

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