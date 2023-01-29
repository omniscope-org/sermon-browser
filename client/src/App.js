import React, { useState } from 'react'
import { useEffect } from 'react'
import Map from './Components/Map'
import Video from './Components/Video'
import uploadXlsx from './helpers/xlsx/uploadXlsx'

function App () {
  const [data, setData] = useState([])
  
  const [selected, setSelected] = useState({})
  const handleSelect = (item) => setSelected(item)
  
  return <div style = {{width: '100vw',  height: '100vh'}}>

    <input type="file" id="uploadXlsx" style = {{display: 'none'}} onChange = {(e) => uploadXlsx(e, setData)} />
    <button onClick = {() => {document.getElementById('uploadXlsx').click()}}>Upload XLSX</button>

    <div style = {{width: '100%', height: 'auto', minHeight: '50%',
      display: 'flex', justifyContent: 'space-around', border: '2px solid red', marginTop: 10
    }}>
      <Map data = {data} handleSelect = {handleSelect} />
      <Video videoId = {selected.youtubeId} timecode = {selected.timecode} />
    </div>
  </div>
}

export default App
