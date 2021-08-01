import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    root: {
        '&:not(:first-child)':{
            marginTop:theme.spacing(2)
        },
        '&:last-child':{
            marginBottom:theme.spacing(4)
        }
    
    },
    upvotes: {
       alignSelf:'center'
       
    },
    upvoteArrow: {
        color:theme.palette.secondary.main,
        fontSize:'24px',
       fontWeight:'bold',
      
       
    },
    upvoteSection:{
        position:'relative',
        verticalAlign:'center',
      
        background:theme.palette.primary.main,
        padding:'8px 12px'
      
    }

}));