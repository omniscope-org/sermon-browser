import React, { useState } from 'react'
import { useEffect } from 'react'
import CanvasJSReact from '../canvasjs/canvasjs.stock.react'

const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart

const RangeSlider = ({filteredData, setDateFilter}) => {

    const [state, setState] = useState({
      dataPoints: [],
      minDate: 0,
      maxDate: 0
    })

    const filter = (e) => setDateFilter({ minimum: e.minimum, maximum: e.maximum })

    useEffect(() => {
        const dps = []
        for (let d of filteredData) dps.push({ x: new Date(d.date), y: 1})

        const unixArr = dps.map(d => d.x.getTime())
        const minDate = Math.min(...unixArr)
        const maxDate = Math.max(...unixArr)

        setState({
            dataPoints: dps,
            minDate,
            maxDate
        })
    }, [filteredData])

    const options = {
      theme: "light2",
      rangeChanged: filter,
      rangeSelector: { enabled: false },
      charts: [],
      navigator: {
        data: [{
          dataPoints: state.dataPoints
        }],
        slider: {
            minimum: state.minDate,
            maximum: state.maxDate
        },
        height: 100
      },
      height: 100,
    }

    const containerProps = {
      width: "100%",
      height: "100%"
    }

    return (
        <div style = {{width: '45%'}}>
          <CanvasJSStockChart containerProps={containerProps} options = {options} />
        </div>
    )
}

export default RangeSlider