import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor:theme.palette.primary.light
    },
    searchBar: {
        backgroundColor:theme.palette.primary.main,
        flex:3,
        marginLeft:theme.spacing(4),
        marginRight:theme.spacing(2)
    },
    searchBarItem:{
        '&:hover':{
            backgroundColor:theme.palette.primary.main
        }
    },
    title:{
        marginLeft:theme.spacing(2)
    },
    avatar: {
        backgroundColor:theme.palette.secondary.main,

    },
    profile: {
        width:'30px',
        height:'30px'
    },
    listItem: {
        '&:not(:last-child)':{
            borderBottom:`1px solid ${theme.palette.primary.dark}`
        },
        '&:hover':{
            background:'gainsboro'
        }

    },
    profileDropDown: {
        display:'block',
        position:'absolute',
        width:'100%',
        top:'120%',
        backgroundColor:theme.palette.primary.main,
        zIndex:'5',
        transition:'0.5s all ease-in-out'
        
    },
    disappear:{
        background:'none',
        display:'none'
        

    },
    profileText: {
        marginLeft:theme.spacing(2),
        left:'10%',

    },
    container: {
        alignItems:'center',
        justifyContent:'space-between'
    }
}));