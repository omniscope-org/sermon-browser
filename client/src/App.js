import React from 'react'
import Map from './Components/Map'
import Video from './Components/Video'

function App () {

  return <div style = {{width: '100vw',  height: '100vh'}}>
    <div style = {{width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-around', border: '2px solid red'}}>
      <Map />
      <Video />
    </div>
  </div>
}

export default App
