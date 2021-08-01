const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const PostSchema = new Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
    },
    community_name:{
        type:String
    },
    community_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
   

},{timestamps:true})



module.exports = mongoose.model("Post",PostSchema);