import { Box, Card,CardContent, CardHeader, Typography, useTheme } from '@material-ui/core'
import React from 'react'

export default function CommunityDescription(props) {
    const theme = useTheme();
    

    return (
    <Box  width='100%'>
    
        <Card elevation={0}>
        
            <CardHeader  style={{background:theme.palette.secondary.dark,color:'white',borderRadius:'none'}}  title={
                <Typography align='left' variant='subtitle1'>About Community</Typography>
            }/>
            <CardContent>
                <Typography align='left' paragraph variant='body1'>
                    {props.community && props.community.data && props.community.data[0].desc}
                </Typography>
            </CardContent>
        </Card>
    </Box>
    )
}
