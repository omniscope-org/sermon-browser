import React, { useEffect, useState } from 'react'
import Map from './Components/Map'
import Video from './Components/Video'
import uploadXlsx from './helpers/xlsx/uploadXlsx'
import { IconButton, Tooltip } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import RangeSlider from './Components/RangeSlider'
import Filters from './Components/Filters'

function App () {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const [selected, setSelected] = useState({})
  const handleSelect = (item) => setSelected(item)
  
  const [dateFilter, setDateFilter] = useState({
    minimum: 0,
    maximum: 0
  })

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  return <div style = {{width: '100vw', height: '100vh'}}>

    <input type="file" id="uploadXlsx" style = {{display: 'none'}} onChange = {(e) => uploadXlsx(e, setData)} />
    <Tooltip title = 'Upload XLSX'>
      <IconButton onClick = {() => {document.getElementById('uploadXlsx').click()}} color = 'primary' style = {{left: '2.5%'}}>
        <UploadIcon />
      </IconButton>
    </Tooltip>

    <div style = {{width: '100%', minHeight: window.innerHeight / 2,
      display: 'flex', justifyContent: 'space-around', marginTop: 10
    }}>
      <Map handleSelect = {handleSelect} dateFilter = {dateFilter} filteredData = {filteredData} />
      <Video videoId = {selected.youtubeId} timecode = {selected.timecode} />
    </div>

    <div style = {{width: '100%', height: 100, 
      display: 'flex', justifyContent: 'space-around', marginTop: 10
    }}>
      <RangeSlider filteredData = {filteredData} setDateFilter = {setDateFilter} />
      <Filters data = {data} setFilteredData = {setFilteredData} />
    </div>
  </div>
}

export default App
