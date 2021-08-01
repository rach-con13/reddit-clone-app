const router = require('express').Router();

const CommunityPost = require('../Models/communityPosts');
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


module.exports = router;