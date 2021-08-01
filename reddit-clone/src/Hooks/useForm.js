import { useEffect, useState } from "react";



export default function useForm(fields) {
    const [value,setValue] = useState({});


    useEffect(() => {
        
    }, [value])
 

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        let fieldObj = {};
      
        fields.map(field => {
           
           const inputField = form[field].value;
            fieldObj[field] = inputField;
        
        })
        
   
        setValue(fieldObj);
        return value;
        
        
    }
    return [value,handleForm];
    
}