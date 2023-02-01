import React from "react"
import { Checkbox, FormControlLabel, Typography } from "@mui/material"

const Filters = ({filter, changeFilter}) => {
    return <>
        <div style = {{width: '45%', display: 'flex', justifyContent: 'center'}}>
            <FormControlLabel control = {<Checkbox checked = {filter.rc} 
                sx={{ color: 'red', '&.Mui-checked': { color: 'red' } }}
                onChange = {(e) => changeFilter('rc', e.target.checked)}/>} 
                label = {<Typography color = 'error' sx = {{fontWeight: 700, color: 'red'}}>rc</Typography>}
             />
            <FormControlLabel control = {<Checkbox checked = {filter.ucc} 
                sx={{ color: 'blue', '&.Mui-checked': { color: 'blue' } }}
                onChange = {(e) => changeFilter('ucc', e.target.checked)}/>} 
                label = {<Typography sx = {{fontWeight: 700, color: 'blue'}}>ucc</Typography>}
            />
            <FormControlLabel control = {<Checkbox checked = {filter.pcusa} 
                sx={{ color: 'green', '&.Mui-checked': { color: 'green' } }}
                onChange = {(e) => changeFilter('pcusa', e.target.checked)}/>}
                label = {<Typography color = 'success' sx = {{fontWeight: 700, color: 'green'}}>pcusa</Typography>}
            />
            <FormControlLabel control = {<Checkbox checked = {filter.sbc} 
                sx={{ color: 'orange', '&.Mui-checked': { color: 'orange' } }}
                onChange = {(e) => changeFilter('sbc', e.target.checked)}/>}
                label = {<Typography color = 'warning' sx = {{fontWeight: 700, color: 'orange'}}>sbc</Typography>}
            />
        </div>
    </>
}

export default Filters