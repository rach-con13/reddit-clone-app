import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
   dropdown:{
       width:'100%',
       padding:'24px',
       background:theme.palette.primary.main,
       display:'block',
       border:'none',
       zIndex:'1'
   }

}));