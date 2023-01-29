import React from 'react'

import 'video.js/dist/video-js.css'
import 'videojs-youtube/dist/Youtube.min.js'

const Video = () => {
    return <div style = {{width: '45%', height: '100%', position: 'relative', marginTop: 10}}>
        <video 
            controls 
            className ="video-js vjs-big-play-centered vjs-fluid"
            data-setup = {
            `{ 
                "techOrder": ["youtube"], 
                "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=HtvzbtmURXI"}] 
            }`
            }
        ></video>
    </div>
}

export default Video