import React from "react"
import { Checkbox, FormControlLabel } from "@mui/material"

const Filters = ({filter, changeFilter}) => {
    return <>
        <div style = {{width: '45%', display: 'flex', justifyContent: 'center'}}>
            <FormControlLabel control = {<Checkbox checked = {filter.rc} 
                color = 'error'
                onChange = {(e) => changeFilter('rc', e.target.checked)}/>} label = 'rc'
             />
            <FormControlLabel control = {<Checkbox checked = {filter.ucc} 
                color = 'primary'
                onChange = {(e) => changeFilter('ucc', e.target.checked)}/>} label = 'ucc' 
            />
            <FormControlLabel control = {<Checkbox checked = {filter.pcusa} 
                color = 'success'
                onChange = {(e) => changeFilter('pcusa', e.target.checked)}/>} label = 'pcusa' 
            />
            <FormControlLabel control = {<Checkbox checked = {filter.sbc} 
                color = 'warning'
                onChange = {(e) => changeFilter('sbc', e.target.checked)}/>} label = 'sbc' 
            />
        </div>
    </>
}

export default Filters