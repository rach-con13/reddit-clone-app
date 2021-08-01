import { Avatar, Box, TextField } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import ImageIcon from '@material-ui/icons/Image';
import Contentfilterbar from './contentFilterBar';
import { Link } from 'react-router-dom';

export default function Contentheader(props) {
    const classes = useStyles();

    return (
     <>
       <Box borderRadius='2px'  padding='16px' display='flex' className={classes.contentBar}>
           <Avatar>R</Avatar>
           
        <Link to="/submit">  <TextField  size='small' variant='outlined' className={classes.createPostInput} placeholder='Create Post' /></Link> 
           <Box display='flex' alignItems='center'>
               <ImageIcon className={classes.icon} />
               <InsertLinkIcon className={classes.icon} />
           </Box>
       </Box>
       <Contentfilterbar />
    </>
    )
}
