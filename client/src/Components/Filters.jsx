import React from "react"
import { Checkbox, FormControlLabel } from "@mui/material"

const Filters = ({filter, changeFilter}) => {
    return <>
        <div style = {{width: '45%', display: 'flex', justifyContent: 'center'}}>
            <FormControlLabel control = {<Checkbox checked = {filter.rc} 
                onChange = {(e) => changeFilter('rc', e.target.checked)}/>} label = 'rc'
             />
            <FormControlLabel control = {<Checkbox checked = {filter.ucc} 
                onChange = {(e) => changeFilter('ucc', e.target.checked)}/>} label = 'ucc' 
            />
            <FormControlLabel control = {<Checkbox checked = {filter.pcusa} 
                onChange = {(e) => changeFilter('pcusa', e.target.checked)}/>} label = 'pcusa' 
            />
            <FormControlLabel control = {<Checkbox checked = {filter.sbc} 
                onChange = {(e) => changeFilter('sbc', e.target.checked)}/>} label = 'sbc' 
            />
        </div>
    </>
}

export default Filters