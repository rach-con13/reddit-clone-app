import React from 'react'
import { Box,Typography,TextField } from '@material-ui/core'

export default function CreateField(props) {
    

    return (
    <Box m={'24px 0px 0px 0px'}>
        <Typography style={{fontSize:'15px'}} variant='subtitle1'>{props.label}</Typography>
        <Typography variant='body2'>{props.desc}</Typography>
        <TextField name={props.label} style={{marginTop:'8px'}} fullWidth variant='outlined' multiline rows={props.rows} />
    </Box>

    )
}
