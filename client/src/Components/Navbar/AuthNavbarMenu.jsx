
import { Avatar, Typography,Paper,Box, makeStyles, TextField, List, ListItem, Button } from '@material-ui/core'
import React, { useState} from 'react'
import {useStyles} from './style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { withData } from '../API/withData';
import { connect, useDispatch } from 'react-redux';
import useAxios from 'Hooks/useAxios';

function AuthNavbarMenu(props) {
    const classes = useStyles();
    const [showDropdown,setDropdown] = useState(false);
    const dispatch = useDispatch();
    const getUser = useAxios('user/authUser','GET').data;
   
    const logOut = async() => {
        const logoutUser = await withData('user/logout','GET');
         dispatch({type:'LOGOUT_USER'});

    }

    let dropdownClass = showDropdown ? '' : classes.disappear;
    return (
        <Box display='flex' flex='1' style={{marginLeft:'24px',position:'relative'}}  alignItems='center'>
        <Avatar className={classes.profile}></Avatar>
        <div  className={classes.profileText}>
          <div style={{display:'flex',alignItems:'center'}}>
          <Typography variant='subtitle2'>{getUser && getUser.username}</Typography>
            {showDropdown ? 
            <ExpandLess onClick={() => setDropdown(false)} style={{display:'inline'}} /> : 
            <ExpandMoreIcon onClick={() => setDropdown(true)} style={{display:'inline'}} />
        }
         
     
          </div>
          <Typography align='left' variant='subtitle2'> {getUser && getUser.karma} Karma</Typography>
          
          <Paper elevation={0} className={`${classes.profileDropDown} ${dropdownClass} `} >
              <List>
                  <ListItem className={classes.listItem}>
                      <Typography variant='body2'>Profile</Typography>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                      <Typography variant='body2'>User Settings</Typography>
                  </ListItem>
                  <ListItem onClick={() => logOut()} className={classes.listItem}>
                      <Typography variant='body2'>Logout</Typography>
                  </ListItem>
              </List>
          </Paper>
         </div>
      
    </Box>
    )
}
const mapStateToProps = (state) => {
    return {
        data:state.auth
    }
}
export default connect(mapStateToProps)(AuthNavbarMenu);

