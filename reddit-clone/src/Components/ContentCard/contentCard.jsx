import { Card,Box, Avatar ,Typography, CardHeader, CardContent} from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function ContentCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0} color='primary'>
            <Box style={{overflow:'hidden'}} display='flex' >
                <div className={classes.upvoteSection}>
                    <KeyboardArrowUpIcon  className={classes.upvoteArrow} />
                   <Typography className={classes.upvotes} color='secondary' variant='subtitle2'>39.9k</Typography>
                    <KeyboardArrowDownIcon  className={classes.upvoteArrow} />
                </div>
                <div>
                <CardHeader avatar={
                    <Avatar style={{width:'20px',height:'20px'}}></Avatar>
                } title={
                    <Box display='flex' alignItems='center'>
                        <Typography  align='left' variant='subtitle2'>{props.community}</Typography>
                        <Typography style={{fontSize:'12px',marginLeft:'8px'}} variant='body2'>Posted by {props.author}</Typography>
                    </Box>
                }  
                />
                <CardContent>
                    <Typography  align='left' style={{fontWeight:'bold',fontSize:'24px',lineHeight:'0em',padding:'8px 0px',wordWrap:'break-word'}} variant='body1'>{props.title}</Typography>
                    <Typography style={{marginTop:'16px',width:'80%'}} align='left' variant='body1'>
                      {props.desc}
                    </Typography>
                </CardContent>
                </div>
               
            </Box>
        </Card>
    )
}
