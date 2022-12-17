import React, {FC, LegacyRef, useEffect, useRef} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

interface LocalVideoViewType {
    localStream: MediaStream | null
}

const LocalVideoView: FC<LocalVideoViewType> = ({localStream}: LocalVideoViewType) => {
    const localVideoRef = useRef<HTMLVideoElement | null>(null)
    useEffect(() => {
        if (localStream) {
            const localVideo = localVideoRef.current;
            if (localVideo !== null) {
                localVideo.srcObject = localStream
                localVideo.onloadedmetadata = () => {
                    localVideo.play()
                }
            }
        }
    }, [localStream])
    return (
        <div className={classNames(styles.videoContainer, 'background_secondary_color')}>
            <video ref={localVideoRef} className={styles.videoElement} autoPlay muted/>
        </div>
    )
}
export default LocalVideoView