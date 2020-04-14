import React from 'react';
import classes from '../BackgroundVideo/BackgroundVideo.module.css';
import fractal from '../../assets/videos/fractal.mp4'

const BackgroundVideo = () => {
    const videoSource = fractal
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo
