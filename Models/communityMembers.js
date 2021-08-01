const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommunityMembersSchema = new Schema({
    community_name:{
        type:String,
        required:true
    },
    member_id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    member_name:{
        type:String
    },
    community_id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    
    
},{timestamps:true})



module.exports = mongoose.model("CommunityMember",CommunityMembersSchema);