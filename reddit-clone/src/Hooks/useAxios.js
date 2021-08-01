import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


let states = {
    LOADING : "LOADING",
    LOADED  : "LOADED",
    UPDATED : "UPDATED",
    FAILURE : "FAILURE"


}

export default function useAxios(url,request,payload,effect) {
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [state,setState] = useState(null);
    const params = useParams();

    useEffect(() => {
        withData(url,request,payload);
    }, [state,params,effect])

        
    const withData = async() => {
        if(!states) {
            setState(states.LOADING)
        }
      
        try {
            const response = await axios({method:request,url:`https://rachael-reddit-clone.herokuapp.com/api/${url}`,payload,withCredentials:true});
            const result = await response;
            
            setState(states.LOADED);
            setData(result.data);
            return result;
            

        } catch (err) {
            setState(states.FAILURE);
            setError(err.response);
        }
    }

    return {data,error,state,withData};
}