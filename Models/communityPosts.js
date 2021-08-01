const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommunityPostsSchema = new Schema({
    community_name:{
        type:String,
        required:true
    },
    community_id:{
        type:mongoose.Schema.Types.ObjectId
    },
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
    },
   
    
    
},{timestamps:true})



module.exports = mongoose.model("CommunityPost",CommunityPostsSchema);