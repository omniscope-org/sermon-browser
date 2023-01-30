import React, { useState } from 'react'
import { useEffect } from 'react'
import CanvasJSReact from '../canvasjs/canvasjs.stock.react'

const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart

const RangeSlider = () => {
    const [state, setState] = useState({
       dataPoints1: [], 
       dataPoints2: [], 
       dataPoints3: [], 
       isLoaded: false 
    })

    useEffect(() => {
        const startDate = new Date('2015-01-01')
        const endDate = new Date('2023-01-01')

        const dps = [
            {
                x: startDate,
                y: 1
            },
            {
                x: endDate,
                y: 1
            }
        ]
        setState({
            isLoaded: true,
            dataPoints: dps
        })
    }, [])

    const options = {
      theme: "light2",
      rangeChanged: function(e) { 
        console.log(e.minimum, e.maximum)
      },
      rangeSelector: { enabled: false },
      charts: [],
      navigator: {
        data: [{
          dataPoints: state.dataPoints
        }],
        slider: {
            minimum: new Date("2015-01-01"),
            maximum: new Date("2023-01-01")
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
          {state.isLoaded && <CanvasJSStockChart containerProps={containerProps} options = {options} />}
        </div>
    )
}

export default RangeSlider