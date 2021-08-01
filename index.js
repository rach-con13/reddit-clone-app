const express = require('express');
const app = express();
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({credentials:true,origin:'https://rachael-reddit-clone.herokuapp.com'}));

require('dotenv').config()

app.use(express.static(path.join(__dirname,"reddit-clone","build")))



// Configure passport with User Auth
const User = require('./Models/user');
const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(User.authenticate()));

app.use(express.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


// passport serialize

require('./passport.config');

app.use(passport.initialize()); 
app.use(passport.session()); 

// Connect to mongodb
require('./db');


const userRoute = require('./Routes/user');
const communityRoute = require('./Routes/community');
const communityMemberRoute = require('./Routes/communityMember');
const postRoute = require('./Routes/post');




app.get("/",(req,res) => {
  res.sendFile(path.join(__dirname,"reddit-clone","build","index.html"))
})
app.get('/api',(req,res) => {
  res.send('api section');

})
app.use('/api/user',userRoute);
app.use('/api/community',communityRoute);
app.use('/api/communityMember',communityMemberRoute);
app.use('/api/post',postRoute);

app.listen(PORT,() => {
    console.log(`listening at ${PORT}`)
})