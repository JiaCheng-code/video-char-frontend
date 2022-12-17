import React, {FC, useEffect, useRef} from "react";
import classNames from "classnames";
import styles from "../LocalVideoView/styles.module.scss";

const RemoteVideoView:FC<MediaStream> = (remoteStream:MediaStream)=>{
    const remoteVideoRef = useRef<HTMLVideoElement | null >(null)
    useEffect(()=>{
        if(remoteStream){
            const remoteVideo = remoteVideoRef.current;
            if(remoteVideo!==null){
                remoteVideo.srcObject = remoteStream
                remoteVideo.onloadedmetadata = ()=>{
                    remoteVideo.play()
                }
            }
        }
    },[remoteStream])
    return (
        <div className={classNames(styles.videoContainer,'background_secondary_color')}>
            <video ref={remoteVideoRef} className={styles.videoElement} autoPlay/>
        </div>
    )
}
export default RemoteVideoView