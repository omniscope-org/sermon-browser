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

  const [filter, setFilter] = useState({
    rc: false,
    ucc: false,
    pcusa: false,
    sbc: false,
    minimum: 0, 
    maximum: 0
  })

  const changeFilter = (filterName, value) => setFilter(prev => ({...prev, [filterName]: value}))

  useEffect(() => {
    let filtered1 = []
    let filtered2 = []

    const {minimum, maximum, ...boolFilters} = filter

    const isNoFilter = Object.values(boolFilters).every(f => !f)

    if (isNoFilter) {
      filtered1 = data
    } else {
      filtered1 = data.filter(d => {
        for (let key in boolFilters) if (boolFilters[key] && d.filter === key) return true
        return false
      })
    }
    
    if (!minimum && !maximum) {
      filtered2 = filtered1
    } else {
      filtered2 = filtered1.filter(d => {
        return new Date(d.date).getTime() > minimum && new Date(d.date).getTime() < maximum
      })
    }
    
    setFilteredData(filtered2)
  }, [filter])

  useEffect(() => {
    const unix1 = new Date('2022-07-01').getTime()
    const unix2 = new Date('2022-08-01').getTime()

    const filtered = data.filter(d => {
      return new Date(d.date).getTime() > unix1 && new Date(d.date).getTime() < unix2
    })  
    console.log(filtered)

    setFilteredData(filtered)
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
      <Map handleSelect = {handleSelect} filteredData = {filteredData} />
      <Video videoId = {selected.youtubeId} timecode = {selected.timecode} />
    </div>

    <div style = {{width: '100%', height: 100, 
      display: 'flex', justifyContent: 'space-around', marginTop: 10
    }}>
      <RangeSlider data = {data} changeFilter = {changeFilter} />
      <Filters filter = {filter} changeFilter = {changeFilter} />
    </div>
  </div>
}

export default App
