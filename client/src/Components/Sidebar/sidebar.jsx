import { Box,Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'
import Trending from './Trending';

export default function Sidebar(props) {
    const classes = useStyles();

    return (
     <Box  className={classes.root}>
         <Typography style={{padding:'16px'}} align='left' variant='subtitle2'>All Communities</Typography>
         <Trending />

 
     </Box>
    )
}
