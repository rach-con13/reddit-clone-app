import { Box, Chip,Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'

export default function Contentfilterbar(props) {
    
    const classes = useStyles();
    return (
        <Box margin='24px 0px' padding='12px 4px' display='flex' alignItems='center' className={classes.contentBar}>
            <Chip className={classes.filterChip} label={
                <Typography variant='h3'>Best</Typography>
            } />
               <Chip className={classes.filterChip} label={
               <Typography variant='h3'>Hot</Typography>
           } />
               <Chip className={classes.filterChip} label={
               <Typography variant='h3'>New</Typography>
           } />

        </Box>
    )
}
