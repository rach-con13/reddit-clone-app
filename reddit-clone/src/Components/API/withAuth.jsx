import axios from 'axios';
import React, { Component } from 'react';


export default function withAuth(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data:null,
    
            }
        }
     
        retrieveData = async(url,request,data) => {
            try {
                const response = await axios({method:request,url:`/${url}`,data,withCredentials:true});
                const result = await response;
                this.setState({
                    data:result
                })
              
            } catch (err) {
                console.log(err.message);
            }
        }
        

        render() {
            return <WrappedComponent {...this.props} retrieveData={this.retrieveData} data={this.state.data} />
        }
    }
}