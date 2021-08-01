import { Avatar, Box, Button,  Container, Grid, TextField, Typography, useTheme } from '@material-ui/core';
import React, { useEffect,useState } from 'react'
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import ImageIcon from '@material-ui/icons/Image';
import { useLocation,Link, useParams } from 'react-router-dom'
import { withData } from '../../API/withData';
import { useStyles } from '../../ContentHeader/style';
import ContentCard from 'Components/ContentCard/contentCard';
import { useSelector } from 'react-redux';
import CommunityDescription from './communityDescription';
import { uncodeSlug } from 'Helpers/createSlug';
import useAxios from 'Hooks/useAxios';

export default function CommunityPage(props) {
    const location = useLocation();
    const theme = useTheme();
    const classes = useStyles();
    const params = useParams();
    
    const [isMember,setMember] = useState(null);
    const [posts,setPosts] = useState([]);
    const data = useSelector(state => state.auth);

    const community_name = uncodeSlug(params.id);
    const communityResponse = useAxios(`community/${community_name}`,'GET');

    
   

    useEffect(() => {
    
        getPosts();
        checkMembership();

    },[])
    useEffect(() => {
         getPosts(); 
         checkMembership();
         
    },[params,communityResponse.data,data,posts.length])

    const getPosts = async() => {
        const query = communityResponse.data && communityResponse.data[0]._id;
        if(communityResponse.data ) {
            const getPosts = await withData(`post/${query}`,'GET');
            setPosts(getPosts)
        }
    }

    const joinCommunity = async() => {
        if(communityResponse && communityResponse.data && data.user.length > 0) {
              const community_name = uncodeSlug(params.id);
              await withData(`communityMember/join/${communityResponse.data[0]._id}`,'POST',{name:community_name});
              setMember(true);
        }
    }
    
    const checkMembership = async() => {
  
        if(communityResponse && communityResponse.data && data.user.length > 0) {
            const community_name = uncodeSlug(params.id);
            const getMembers = await withData(`communityMember/members/${communityResponse.data[0]._id}`,'GET');
    
            const hasMember = getMembers.data.filter((member) => member.member_id == data.user[0]._id && member.community_name == community_name);
            hasMember.length > 0 ? setMember(true) : setMember(false);
         
            
        } else {
            setMember(false);
        }
    }
    
    return (


       <Container  maxWidth='lg' style={{padding:'24px'}} >
           <Box bgcolor='white' m='24px 0px' padding='24px' width='100%'>
           <Box  display='flex' m={'0px 0px 8px 0px'} >
               
            <Typography align='left' variant='h4'>{communityResponse.data && communityResponse.data[0].name}</Typography> 
             {isMember ? <Button onClick={joinCommunity}  disableElevation color='secondary'  style={{padding:'8px 32px',marginLeft:'24px',textTransform:'none'}} variant='contained'>Joined</Button> :
            <Button onClick={joinCommunity} disableElevation variant='outlined' style={{marginLeft:'24px',textTransform:'none',padding:'8px 32px'}}>Join</Button>
            } 
           </Box>
            <Typography  align='left' variant='h3'>r/{communityResponse.data && communityResponse.data[0].name}</Typography>
           </Box>
          <Grid container spacing={3}>
              <Grid item sm={8} lg={8}>
                <Box  width='100%' borderRadius='2px'  padding='16px' display='flex' className={classes.contentBar}>
                    <Avatar>R</Avatar>
                    <Link  style={{width:'100%'}} to={{pathname:'/submit',state:{selected:uncodeSlug(params.id),id:communityResponse.data && communityResponse.data[0]._id,desc:communityResponse.data && communityResponse.data[0].desc}}}>
                        
                        <TextField style={{width:'90%'}}  size='small' variant='outlined' className={classes.createPostInput} placeholder='Create Post' />
                    </Link> 
                    <Box display='flex' alignItems='center'>
                        <ImageIcon className={classes.icon} />
                        <InsertLinkIcon className={classes.icon} />
                    </Box>
                </Box>
                <Box width='100%' margin={'24px 0px'} borderRadius='2px' padding='16px'>
                   
                    {posts.data && posts.data.map((post,index) => {
                        console.log(post);
                         return (
                         <div key={index}>
                            <ContentCard community={`r/${post.community_name}`} author={post.author} title={post.title} desc={post.desc} />
                         </div>
                         )
                    })};
                  
                </Box> 
                </Grid>
                <Grid item sm={4} lg={4}>
                     <CommunityDescription community={communityResponse} /> 
                </Grid>
          </Grid>
       </Container>
  
    )
}
