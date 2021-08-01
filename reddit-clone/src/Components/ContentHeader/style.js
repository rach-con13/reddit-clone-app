import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    contentBar: {
        background:theme.palette.primary.light
    },
    createPostInput:{
        background:theme.palette.primary.main,
        marginLeft:'8px',
        flex:1,
        marginRight:'16px'
    },
    icon: {
        color:'#9c9c9c',
        margin:'4px'
        
    },
    filterChip:{
        background:'none',
       
        
    }
}));