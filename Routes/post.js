const router = require('express').Router();
const Post = require('../Models/post');
const isAuth = require('../Middleware/auth');
let passport = require('passport');


router.get('/',async(req,res) => {
    try {
        const allPosts = await Post.find();
        res.send(allPosts);
    } catch(err) {
        res.status(500).json({success:false,message:err.message})
    }

})

router.delete('/del',async(req,res) => {
    try {
        const allPosts = await Post.remove({});
        res.send(allPosts);
    } catch(err) {
        res.status(500).json({success:false,message:err.message})
    }

})
router.get('/:id',async(req,res) => {
    let id = req.params.id;
    try {
        const singlePost = await Post.find({community_id:id});
        res.send(singlePost);
    } catch(err) {
        res.status(500).json({success:false,message:"Cant find community, please try again"})
    }
})

router.post('/:id',isAuth,async(req,res) => {
    let id = req.params.id;
    try {
        let postInfo = {
            author:req.user.username,
            title:req.body.title,
            desc:req.body.desc,
            community_id:id,
            community_name:req.body.name
        }
        const newPost = await new Post(postInfo);
        newPost.save();
        res.send(newPost);
    } catch(err) {
        res.status(500).json({success:false,message:err.message})
    }
})

module.exports = router;