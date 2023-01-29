import React from 'react'
import YouTube from 'react-youtube'

const Video = ({videoId, timecode}) => {

    const opts = {
        //height: '390',
        //width: '640',
        playerVars: {
          autoplay: 1,
          start: timecode
        },
      };

    return <div style = {{width: '45%', height: '100%', position: 'relative'}}>
        {videoId && 
        <YouTube videoId = {videoId} opts={opts} style = {{height: '100%'}} />
            // <video 
            //     controls 
            //     className ="video-js vjs-big-play-centered vjs-fluid"
            //     data-setup = {
            //     `{ 
            //         "techOrder": ["youtube"], 
            //         "sources": [{ 
            //             "type": "video/youtube", 
            //             "src": "https://www.youtube.com/watch?v=${videoId}"
            //         }],
            //         "youtube": { "start": ${timecode} } 
            //     }`
            //     }
            // ></video>
        }
    </div>
}

export default Video