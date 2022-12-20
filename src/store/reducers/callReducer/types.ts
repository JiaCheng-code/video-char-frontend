export interface actionType {
    type: string
    localStream: MediaStream,
    remoteStream: MediaStream,
    callState: string,
    callingDialogVisible:boolean,
    callerUserName:string
}
