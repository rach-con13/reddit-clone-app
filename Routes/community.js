const router = require('express').Router();

const Community = require('../Models/community');
const isAuth = require('../Middleware/auth');
let passport = require('passport');


router.get('/',async(req,res) => {
    try {
        const allCommunities = await Community.find();
        res.send(allCommunities);
    } catch(err) {
        res.status(500).json({success:false,message:err.message})
    }
})

router.post('/', async(req,res) => {
    try {
        const newCommunity = new Community({name:req.body.name,type:req.body.type,desc:req.body.desc});
        newCommunity.save();
        res.status(200).json({success:true,message:'Created a new Community'});
    } catch(err) {
        res.status(500).json({success:false,message:'Could not create a Community'})
    }
})

router.get('/:name',async function(req,res) {
    let name = req.params.name;
    try {
        const singleCommunity = await Community.find({name:name});
        res.send(singleCommunity);
    } catch(err) {
        res.status(500).json({success:false,message:"Community could not be found or doesn't exist"});
    }
})


module.exports = router;