import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
   root: {
       backgroundColor:theme.palette.primary.light,
       borderRadius:'2px'
   },
   listItem:{
       padding:'0px 16px'
   }

}));