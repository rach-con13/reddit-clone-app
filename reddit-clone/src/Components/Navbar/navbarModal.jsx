import { Box, Typography } from '@material-ui/core';
import useAxios from 'Hooks/useAxios';
import React from 'react'
import { Link } from 'react-router-dom';
import { createSlug } from 'Helpers/createSlug';
import { useStyles } from './style';


export default function NavbarModal(props) {
    const classes = useStyles();
    
    const allCommunities = useAxios('community','GET').data;
    const filteredCommunities = allCommunities && allCommunities.filter(community => community.name.toLowerCase().includes(props.search));


        
    return (
    <Box style={{transition:'all 0.5s ease-in-out'}}  position='absolute' top='130%' width='100%' >
        <Box  bgcolor='white' width='80%' margin='0 auto'>
         
           {filteredCommunities && filteredCommunities.map((community,index) => {
               let slug = createSlug(community.name);
               return (
                <Box onBlur={props.close} className={classes.searchBarItem} p={'16px'} key={index} display='flex'>
                    <Link  to={{pathname:`/r/${slug}`,state:{name:community.name,id:community._id,desc:community.desc}}}>
                        <Typography onClick={() => console.log('hey')} variant='body2'>r/{community.name}</Typography>
                    </Link>
                </Box> 
               )
           })}

        </Box>
    </Box>
    )
}
