import video from '../../videos/stars.mp4';
import videoStyle from '../Background Video/video.module.css'

function VideoBackground() {
    return (
        <video 
            className={videoStyle.video}
            autoPlay
            loop
            muted>
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default VideoBackground;