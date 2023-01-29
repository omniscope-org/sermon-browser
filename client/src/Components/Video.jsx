import React from 'react'
import YouTube from 'react-youtube'

const Video = ({videoId, timecode}) => {

    const opts = {
      height: window.innerHeight / 2,
      playerVars: {
        autoplay: 1,
        start: timecode
      },
    }

    return <div style = {{width: '45%', height: '100%', position: 'relative'}}>
        {videoId && <YouTube videoId = {videoId} opts={opts} />}
    </div>
}

export default Video