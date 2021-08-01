import { Box, Dialog ,Container,Button,DialogTitle,Typography, TextField, Grid, IconButton} from '@material-ui/core'
import React from 'react'
import Login from './Login';
import Signup from './SignUp';
import { useStyles } from './style'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function AuthModal(props) {
    const classes = useStyles();
    return (
        
        <Dialog fullWidth={true} open={props.open} onClose={props.handleClose} maxWidth='md' className={classes.authModal} {...props}>
           <Grid container>
               <Grid item lg={2} md={2} sm={2} xs={0}>
                <div  className={classes.imageBar}>

                </div>
               </Grid>
              <Grid item lg={10} md={10} sm={10} xs={12}>
                <div style={{textAlign:'right'}}>
                   
                    <Container maxWidth='sm'  style={{marginTop:'80px'}} >
                    <IconButton onClick={props.handleClose}>
                        <HighlightOffIcon  className={classes.exitBtn} />
                    </IconButton>
                        {props.modalName == 'login' ? 
                        <Login /> :   <Signup /> }  
                    </Container>
                </div>
              </Grid>
           </Grid>
           
        </Dialog>
    )
}