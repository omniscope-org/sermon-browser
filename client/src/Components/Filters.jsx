import { Checkbox, FormControlLabel } from "@mui/material"
import React, { useState } from "react"
import { useEffect } from "react"

const Filters = ({data, setFilteredData}) => {

    const [filters, setFilters] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    })

    const check = (e, checkboxName) => setFilters(prev => ({...prev, [checkboxName]: e.target.checked}))
    
    useEffect(() => {
        const isNoFilter = Object.values(filters).every(f => !f)

        if (isNoFilter) {
            setFilteredData(data)
        } else {
            const filtered = data.filter(i => {
                for (let key in filters) if (filters[key] && +key === i.filter) return true
                return false
            })
            setFilteredData(filtered)
        }
    }, [filters])

    return <>
        <div style = {{width: '45%', display: 'flex', justifyContent: 'center'}}>
            <FormControlLabel control = {<Checkbox checked = {filters.first} onChange = {(e) => check(e, '1')}/>} label = '1' />
            <FormControlLabel control = {<Checkbox checked = {filters.second} onChange = {(e) => check(e, '2')}/>} label = '2' />
            <FormControlLabel control = {<Checkbox checked = {filters.third} onChange = {(e) => check(e, '3')}/>} label = '3' />
            <FormControlLabel control = {<Checkbox checked = {filters.fourth} onChange = {(e) => check(e, '4')}/>} label = '4' />
        </div>
    </>
}

export default Filters