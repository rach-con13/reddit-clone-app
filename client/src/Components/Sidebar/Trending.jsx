import { List, ListItem, Typography } from '@material-ui/core'
import { withData } from 'Components/API/withData';
import { createSlug } from 'Helpers/createSlug';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStyles } from './style';

export default function Trending(props) {
    const [allCommunities,setAllCommunities] = useState(null);
    const classes = useStyles();

     useEffect(() => {
          getAllCommunities();
         
     }, [allCommunities])

   const getAllCommunities = async() => {
      let communities = await withData('community','GET');
      if(communities) {
          if(!allCommunities || allCommunities.data.length <= 0 || allCommunities.data.length !== communities.data.length ) {
               setAllCommunities(communities);
          } 
      }
   }

    return (
        <List>
       
            
          
             {allCommunities && allCommunities.data.map((community,index) => {
                  console.log(community);
                  let slug = createSlug(community.name);
                  return (
                         <ListItem  style={{padding:'16px 0px',borderBottom:'1px solid dimgrey'}}>
                              <Link to={`/r/${slug}`}>
                                   <Typography className={classes.listItem} align='left' variant='body1'>r/{community.name}</Typography>
                              </Link>
                         </ListItem>
                  )
             })}
       
            
        </List>
    )
}
