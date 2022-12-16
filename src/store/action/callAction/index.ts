export const CALL_SET_LOCL_STREM = 'CALL_SET_LOCL_STREM'

export const setLocalStream = (localStream: MediaStream) => {
    return {
        type: CALL_SET_LOCL_STREM,
        localStream
    }
}