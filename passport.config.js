const mongoose = require('mongoose');
const express = require('express');
const app = express();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('./Models/user.js');

passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());