const router = require('express').Router();

const CommunityMember = require('../Models/communityMembers');
const isAuth = require('../Middleware/auth');
let passport = require('passport');


router.get('/members/:id',async(req,res) => {
    let id = req.params.id;
    try {
        const getMembers = await CommunityMember.find({community_id:id});
        res.send(getMembers);
    } catch(err) {
        res.status(500).json({success:false,message:err.message})
    }
})

router.post('/join/:id', isAuth, async(req,res) => {
    let id = req.params.id;
 
    try {
        memberData = {
            community_name:req.body.name,
            community_id:id,
            member_id:req.user._id,
            member_name:req.user.username,
        }
        const newMember = new CommunityMember(memberData);
        newMember.save();
        res.status(200).json({success:true,message:'Joined subreddit',newMember});
    } catch(err) {
        res.status(500).json({success:false,message:err.message})
    }
})
module.exports = router;