export interface actionType {
    type: string
    localStream: MediaStream,
    remoteStream: MediaStream,
    callState: string,
    callingDialogVisible: boolean,
    callerUserName: string,
    callRejected: callRejectedType
}

export interface callRejectedType {
    rejected: boolean,
    reason: string
}
