import React, { Suspense } from "react";
import { Tilt } from "react-tilt";
import YouTube from "react-youtube";
import {motion} from 'framer-motion';

const youtubeVideoId = import.meta.env.VITE_REACT_APP_YOUTUBE_VIDEO_ID;

const YoutubeVideo = () => {
    
    const opts = {
        height: "350",
        width: "100%",
        playerVars: {
            autoplay: 1, // Enable autoplay
            rel: 0,      // No related videos
            modestbranding: 1, // Minimal branding
        },
    };

    const handleOnReady = (event) => {
        console.log("Video ready to play!"); // Debugging
        // Uncomment this line if you want to pause the video on load:
        // event.target.pauseVideo();
    };
    
    return (
            <motion.div
                className="border-top border-l-2 border-r-2 border-gray-500 p-[1px] 
                   rounded-[20px] w-full max-w-4xl mx-auto"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4}
                }}
                whileTap={{scale: 1}}
                initial={{
                    rotate: "0deg",
                    scale: 0,
                    transition: { duration: 0.4 }
                }}
                animate={{
                    rotate: "0deg",
                    scale: 1,
                    transition: { duration: 0.4 }
                }}
                exit={{
                    rotate: "0deg",
                    scale: 0,
                    transition: { duration: 0.5 } 
                }}
                transition={{
                    // duration: 1,
                    ease: "backInOut"
                }}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <YouTube 
                        videoId={youtubeVideoId}
                        opts={opts} 
                        onReady={handleOnReady} 
                    />
                </Suspense>
            </motion.div>
        // </Tilt>
    );
};

export default YoutubeVideo;