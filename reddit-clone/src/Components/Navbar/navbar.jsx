import { AppBar, Avatar, Typography,Paper,IconButton,Toolbar,Container,Box, makeStyles, TextField, List, ListItem, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {useStyles} from './style';
import AuthModal from '../Auth/AuthModal';
import { withData } from '../API/withData';
import AuthNavbarMenu from './AuthNavbarMenu';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { LOGIN_USER } from 'Redux/actions/Creators/AuthCreator';
import useForm from 'Hooks/useForm';
import useModal from 'Hooks/useModal';
import NavbarModal from './navbarModal';

function Navbar(props) {
    const [open,setOpen] = useState(false);
    const [modal,setModal] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();
    const [value,handleForm] = useForm(['search']);
    const SearchModal = useModal();
    
    const setCurrentModal = (modal) => {
        setModal(modal);
        setOpen(true);
    }  
    
   

    const closeModal = () => {
        setOpen(false)
    }

    useEffect(() => {
        async function loggedIn() {
            const logged = await withData('user/loggedIn','GET');
            if(logged && logged.data.user) {
             dispatch(LOGIN_USER(logged.data.user));
            }
        }     
            loggedIn();    
    }, [props.data.loggedIn])

    
    return (
        <>
       <AppBar className={classes.nav} elevation={0} position='static'>
        <Container style={{position:'relative'}}  >
           <Toolbar className={classes.container}>    
              <Box display='flex' alignItems='center' style={{width:'100%'}}>
                <Avatar className={classes.avatar}>R</Avatar>
                <Typography className={classes.title} variant='h1'>
                    <Link to='/'>
                        Reddit
                    </Link>
                </Typography>
                <Link to='/create'>
                
                    <Typography  style={{margin:'0px 32px',width:'100%',padding:'8px 0px',fontWeight:'600'}} variant='body1'>Create Community</Typography>
                </Link>
             <form onInput={handleForm}  onFocus={SearchModal.open} style={{width:'100%',position:'relative'}}>
               <TextField name='search' style={{width:'80%',margin:'0'}} className={classes.searchBar} size='small' variant='outlined'
               placeholder='Search' />
               {SearchModal.isOpen ? 
                <NavbarModal close={SearchModal.close} search={value.search} />
                : ''}
               </form>
                {props.data.loggedIn ? <AuthNavbarMenu /> : <> 
                    <Button onClick={() => setCurrentModal('login')} variant='outlined' size='large' style={{color:'#0078d3',borderColor:'#0078d3'}} disableElevation>
                        <Typography variant='subtitle2'>Login</Typography>
                    </Button>

                    <Button onClick={() => setCurrentModal('signup')} disableElevation size='large' style={{background:'#0078d3',width:'12%',color:'#FFF',marginLeft:'8px'}} variant='contained'>
                        <Typography variant='subtitle2'>Register</Typography>
                    </Button>
                </>}
            
             </Box> 
           </Toolbar>
        </Container>
       </AppBar>
      <AuthModal handleClose={closeModal} open={open} modalName={modal} />
       </>
    )
}
const mapStateToProps = (state) => {
    return {
        data:state.auth
    }
}

export default connect(mapStateToProps)(Navbar);