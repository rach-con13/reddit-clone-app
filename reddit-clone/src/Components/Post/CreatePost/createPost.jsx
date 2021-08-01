import { Avatar, Box, Button, Card, CardContent, CardHeader, Container, Tab, Tabs, TextareaAutosize, TextField, Typography, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { TabContext, TabPanel,Alert } from '@material-ui/lab';
import { useStyles } from './style';
import {withData} from '../../API/withData';
import {useLocation,useHistory} from 'react-router-dom';
import {createSlug} from 'Helpers/createSlug';
import useAxios from 'Hooks/useAxios';
import useForm from 'Hooks/useForm';

export default function CreatePost(props) {
    const location = useLocation();
    const history = useHistory();
    const [tab,setTab] = useState(1);
    const [isModal,setModal] = useState(false);
    const [selectedCommunity,setSelected] = useState( location.state ? {name:location.state.selected,id:location.state.id,desc:location.state.desc} : {name:'Choose a Community'});
    const [message,setMessage] = useState(null);
    const theme = useTheme();

    const AllCommunities = useAxios('community','GET',isModal);
    const [value] = useForm(['title','desc']);

    useEffect(() => {
      
    }, [value])


    useEffect(() => {
        AllCommunities.withData('community','GET',isModal);
    }, [isModal])
  

    
 

    const createPost = async(e) => {
        e.preventDefault();
     
        let name = selectedCommunity.name;
        let form = e.currentTarget;
        let title = form['title'].value;
        let desc = form['desc'].value;

         let formObj = {
            title,
            desc,
            name
         }
    


        if(selectedCommunity.name === 'Choose a Community') {
            setMessage({success:false,message:'Please select a community'});
        } else {
           
            let newPost = await withData(`post/${selectedCommunity.id}`,'POST',formObj);
            console.log(newPost);
    
            if(newPost.status === '200') {
                setMessage({success:true,message:'Post Created'});
                let slug = createSlug(selectedCommunity.name);
                 history.replace({pathname:`/r/${slug}`,state:{name:selectedCommunity.name,id:selectedCommunity.id,desc:selectedCommunity.desc}})

            }
        }
    }


    const handleChange = (event, newValue) => {
        setTab(newValue);
      };
    return (
        
        
        <Container  style={{textAlign:'left',padding:'0'}} maxWidth='md'>
         <Typography align='left' variant='subtitle1' backgr>Create a post</Typography>
         
         <Box  m={'24px 0px 8px 0px'} style={{justifyContent:'space-between'}}  width='30%' alignItems='center'  position='relative' borderRadius='4px' display='inline-flex'  bgcolor={theme.palette.primary.light}>
            <Typography  style={{padding:'12px 16px'}} variant='body1'>{selectedCommunity.name}</Typography>
            <ArrowDropDown style={{margin:'0px 16px'}} onClick={() => setModal(!isModal)}  />
            {isModal ? <Box  top='100%' margin='0px' width='100%' zIndex='2' position='absolute' bgcolor='white'>    
                {AllCommunities && AllCommunities.data && AllCommunities.data.map((community,index) => {
                    let communityInfo = {
                        name:community.name,
                        id:community._id,
                        desc:community.desc
                    }
                   
                    return <Box  onClick={() => setSelected(communityInfo)} width='100%' margin='0px' p='24px ' data-name={community.name} bgcolor={theme.palette.primary.main}>{community.name}</Box>
                })}
                </Box>
           
              : ''}
         </Box>
       
         <Card  style={{position:'relative',zIndex:'1'}} elevation={0}>
             
            <TabContext value={tab}>
                <Tabs onChange={handleChange} style={{fontWeight:'500'}} value={tab} indicatorColor="secondary">
                    <Tab label="Post" value={1}  />
                    <Tab label='Link' value={2} />
                    
                      
                   
            
                </Tabs>
                <CardContent>
                    <TabPanel style={{textAlign:"right"}} value={1}>
                    <form onSubmit={createPost }>
                        <TextField name='title' fullWidth margin='dense' variant='outlined' placeholder='Title' />
                        <TextField name='desc' style={{marginTop:'8px'}} fullWidth multiline rows={8} variant='outlined' />
                        <Button type='submit' style={{marginTop:'8px'}} disableElevation color='secondary' variant="contained">Post</Button>
                    </form>
                    </TabPanel>
                    <TabPanel style={{textAlign:"right"}} value={2}>
                        <TextField fullWidth margin='dense' variant='outlined' placeholder='Title' />
                        <TextField  style={{marginTop:'8px'}} fullWidth multiline rows={3} placeholder='Link' variant='outlined' />
                        <Button style={{marginTop:'8px'}} disableElevation color='secondary' variant="contained">Post</Button>
                    </TabPanel>
                </CardContent>
                
                </TabContext>
                {message ? 
                    <Alert severity={message && message.success ? 'success' : 'error'}>{message.message}</Alert>
                : ''}
         </Card>
        </Container>
      
    )
}
