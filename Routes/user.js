const router = require('express').Router();
const { findByIdAndDelete } = require('../Models/user');
const User = require('../Models/user');
const isAuth = require('../Middleware/auth');
let passport = require('passport');

// Get User
router.get('/',async (req,res) => {
    try {
        const allUsers = await User.find();
        res.send(allUsers);
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})

router.get('/authUser',isAuth,async(req,res) => {
    res.send(req.user);
})


// Register User
router.post('/register',async function(req,res,next) {
    let username = req.body.username;
    try {
        let newUser = await new User({username:req.body.username});
        User.register(newUser,req.body.password,function(err,user) {
            
            passport.authenticate('local')(req,res, () => {
                res.status(200).json({success:true,message:'your account has been created'});
            });
        })
    }  catch(err) {
         next(err);
    }

})

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
  
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.send(req.user);
  });

router.get('/loggedIn',isAuth,function(req,res) {
    res.status(200).json({success:true,message:'',user:req.user});
})

router.get('/logout',isAuth,(req,res) => {
    req.logout();
    res.send({success:true,message:'You have logged out'});
})

router.get('/secret',isAuth,(req,res) => {
    res.send('only logged in users can see this route');
})
// Login User

// Delete Users
router.delete('/:id',async function(req,res) {
    let id = req.params.id;
    try {
        const deleteUser = await User.findByIdAndDelete({_id:id});
        res.status(200).json({success:true,message:'Account was deleted'});
    } catch(err) {
        res.status(500).json({success:false,message:'Account could not be deleted'});
    }
})

router.get('/:id',isAuth,async function(req,res) {
    let id = req.params.id;
    try {
        const oneUser = await User.findById({_id:id});
        res.status(200).json({success:true,message:'User was found'});
    } catch(err) {
        res.status(500).json({success:false,message:"User could not be found or doesn't exist"});
    }
})

// Update User
router.put('/',function(req,res) {

})
module.exports = router;