import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import logo from './logo.png';
import LearnDialog from "./LearnDialog";
import YoutubePlayer from "./YoutubePlayer";
const ComfyAssistantOverlay = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [video,setVideo] = useState(null)
    window.onLearnClick = () => {
        setIsOpen(true)
        setVideo(null)
    }


    return (
            <Dialog
                open={isOpen}
                className="relative z-50"
                onClose={() => {}}
            >
                {!video && <LearnDialog close={()=>setIsOpen(false)} startVideo={(video) => setVideo(video)}/>}
                {video && <YoutubePlayer videoId={'BT2Kpm1cU-w'} close={()=> {
                    setIsOpen(false)
                    setVideo(null)
                }} video={video} />}
            </Dialog>
    );
};

export default ComfyAssistantOverlay;
