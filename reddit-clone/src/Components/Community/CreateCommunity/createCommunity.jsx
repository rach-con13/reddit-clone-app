import { Container, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react'
import { withData } from '../../API/withData';
import CreateField from './createField'

export default function CreateCommunity(props) {
    const [radioValue,setValue] = useState('public');
    const [message,setMsg] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
     
    }
    const createCommunity = async(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form['Name'].value;
        const desc = form['Description'].value;
        const type = radioValue;

        const newCommunity = await withData('community','POST',{name,type,desc});
        setMsg(newCommunity.data);

    }

    return (
        <Container   style={{textAlign:'left',background:'white',padding:'40px'}} maxWidth='md'>
        <Typography align='left' variant='subtitle1' backgr>Create community</Typography>
        <form onSubmit={createCommunity}>
            <CreateField label='Name' desc='Community names including capitalization cannot be changed' />
            <CreateField rows={4} label='Description' desc='This is how new members come to understand your community.' />
            <FormControl style={{marginTop:'24px'}} component='fieldset'>
                <FormLabel component='legend'>
                <Typography style={{fontSize:'15px',color:'black'}} variant='subtitle1'>Community Type</Typography>
                </FormLabel>
                <RadioGroup aria-label='community type' name='communityType' value={radioValue} onChange={handleChange}>
                    <FormControlLabel value="public" control={<Radio />} label="Public" />
                    <FormControlLabel value="restricted" control={<Radio />} label="Restricted" />
                    <FormControlLabel value="private" control={<Radio />} label="Private" />
                </RadioGroup>
                <Button type='submit' style={{textTransform:'none',marginTop:'24px'}} color='secondary' variant='contained' disableElevation>
                    <Typography  variant='subtitle1'>Create Community</Typography>
                </Button>
                {message ?
                    <Alert style={{marginTop:'24px'}} severity={message && message.success ? 'success' : 'error'}>
                        {message.message}
                    </Alert>
                :''}
            </FormControl>
        </form>
           
        
        </Container>
    )   
}
