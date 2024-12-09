import React, { Suspense } from "react";
import { Tilt } from "react-tilt";
import YouTube from "react-youtube";
import {motion} from 'framer-motion';

const YoutubeVideo = () => {
    
    const opts = {
        height: "390",
        width: "640",
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

    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           'Y',   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    
    return (
        // <Tilt className="xs:w-[250px] w-full" options={defaultOptions}>
            <motion.div
                className="border-top border-l-2 border-r-2 border-gray-500 p-[1px] 
                   rounded-[20px]"
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 0.5}
                }}
                whileTap={{scale: 1}}
                initial={{
                    rotate: "0deg",
                    scale: 0,
                    transition: { duration: 1 }
                }}
                animate={{
                    rotate: "0deg",
                    scale: 1,
                    transition: { duration: 2 }
                }}
                exit={{
                    rotate: "0deg",
                    scale: 0,
                    transition: { duration: 1 } 
                }}
                transition={{
                    // duration: 1,
                    ease: "backInOut"
                }}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <YouTube 
                        videoId="f7LR0ib_mG0" 
                        opts={opts} 
                        onReady={handleOnReady} 
                    />
                </Suspense>
            </motion.div>
        // </Tilt>
    );
};

export default YoutubeVideo;