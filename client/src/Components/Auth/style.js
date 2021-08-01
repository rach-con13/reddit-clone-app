import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
   authModal:{
    
   },
   imageBar:{
       height:'500px',
       backgroundSize:'cover',
       background:`url(https://cdn.dribbble.com/users/234525/screenshots/5853076/eggsacrosstheuniverse.jpg) no-repeat center`
   },
   form:{
       marginTop:'32px',
       textAlign:'right'
   },
   exitBtn:{
       position:'relative',
       fontSize:'24px',
     
       color:theme.palette.primary.contrastText,
       
   },
   formBtn:{
        background:theme.palette.secondary.dark,
        color:'white',
        marginTop:theme.spacing(2)
   },
   input:{
       '&:not(:first-child)':{
           marginTop:'16px'
       }
   }
}));