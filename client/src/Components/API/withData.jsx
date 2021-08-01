import axios from "axios";

export const withData = async(url,request,data) => {
    try {
        const response = await axios({method:request,url:`https://rachael-reddit-clone.herokuapp.com/api/${url}`,data,withCredentials:true});
        const result = await response;
        return result;
    } catch (err) {
       
        return err.response;
    }
}