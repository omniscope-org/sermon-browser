import React, { useState } from 'react'
import { useEffect } from 'react'
import CanvasJSReact from '../canvasjs/canvasjs.stock.react'

const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart

const RangeSlider = ({data, changeFilter}) => {

    const [state, setState] = useState({
      dataPoints: [],
      minDate: 0,
      maxDate: 0
    })

    const filter = (e) => {
      changeFilter('minimum', e.minimum)
      changeFilter('maximum', e.maximum)
    }

    useEffect(() => {
        const dps = []

        for (let d of data) dps.push({ x: new Date(d.date), y: 1})

        const unixArr = data.map(d => new Date(d.date).getTime())
        const minDate = Math.min(...unixArr)
        const maxDate = Math.max(...unixArr)

        setState({
          dataPoints: dps,
          minDate,
          maxDate
        })

    }, [data])

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
            minimum: new Date('2007-07-01').getTime(),
            maximum: new Date('2009-08-01').getTime()
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