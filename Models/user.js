const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    karma:{
        type:Number,
        default:0
    }

},{timestamps:true})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);