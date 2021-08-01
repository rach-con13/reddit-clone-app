import { TextField,Button,Typography} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import React,{useEffect, useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withData } from '../API/withData';
import { useStyles } from './style';
import {LOGIN_USER,LOGIN_USER_FAILURE} from 'Redux/actions/Creators/AuthCreator';

 function Login(props) { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const [message,setMessage] = useState(null); // login message
    useEffect(() => {
      console.log(props.data);

 
    }, [props.data])
 
    const loginUser = async(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const username = form['username'].value;
        const password = form['password'].value;
        const formData = {
            username,
            password
        }
        const loggedInUser = await withData('user/login','POST',formData);

        const successData = {
            success:true,
            message:'You have logged in'
        }
        const errorData = {
            success:false,
            message:'Unable to log in, please try again later'
        }
        if (loggedInUser.status == 200) {
            dispatch(LOGIN_USER(loggedInUser))
            setMessage(successData);
        } else {
            dispatch(LOGIN_USER_FAILURE(loggedInUser));
            setMessage(errorData);
        }
   
    }

    return (
    <>
    <Typography align='left' variant='h1'>Login</Typography>
    <form onSubmit={loginUser} className={classes.form}>
        <TextField name='username' className={classes.input} fullWidth size='medium' placeholder='Username' variant='outlined'></TextField>
        <TextField type='password' name='password' className={classes.input} fullWidth size='medium' placeholder='Password' variant='outlined'></TextField>
        <Button type='submit' size='large' className={classes.formBtn} disableElevation variant='contained'>
            <Typography variant='subtitle2'>Login</Typography>
        </Button> 
  
    </form>
    {console.log(message)}

    <div style={{marginTop:'24px'}}>
        {message ? ( message.success ? <Alert severity='success'>{message.message}</Alert> :  <Alert severity='error'>{message.message}</Alert>):''};
  
    </div>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        data:state
    }
}

export default connect(mapStateToProps)(Login);