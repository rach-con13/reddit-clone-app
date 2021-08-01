import { Box, Button, TextField } from '@material-ui/core';
import { withData } from 'Components/API/withData';
import useAxios from 'Hooks/useAxios'
import useForm from 'Hooks/useForm';
import React, { useEffect, useState } from 'react'

export default function Test(props) {
    const [posts,setPosts] = useState()
    const retrievePosts = useAxios('post/600463401c46ca61e489464e','GET');
    const FormData = useForm(['title','desc']);
    
    useEffect(() => {      
            setPosts(retrievePosts.data);  
            console.log(FormData);   
    }, [retrievePosts.state])
    

    const addPost = async(e) => {
       FormData.handleForm(e);
       let values = FormData.value;
       let {title,desc} = values;
     
     let newPost = await withData('post/600463401c46ca61e489464e','POST',{title,desc});
       let data = newPost.data;
       let updatedArr = [...posts,newPost.data];
       setPosts(updatedArr);
      
       
    }

    return (
        <>
        <Box marginTop='40px' >
            <form type='submit' onSubmit={addPost}>
                <TextField  name='title' placeholder='Add Title' variant="outlined" />
                <TextField name='desc' style={{marginLeft:'24px'}}  placeholder='Add Desc' variant="outlined" />
                <Button color='secondary' disableElevation variant='contained' type='submit'>Submit</Button>
        
        {console.log(FormData)}
        

{/*         
        {posts && posts.map((post,index) => {
            return <div>
                <p>{post.title}</p>
            </div>
        })}
         */}
         {posts && posts.map((post,index) => {
             return <div style={{padding:'24px',textAlign:'left'}}>
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
             </div>
         })} 
     
          </form>

         </Box>
        </>
    )
}
