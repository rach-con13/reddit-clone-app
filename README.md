<p align='center'>
<img  width='200' alt='reddit logo' src='https://camo.githubusercontent.com/a4fa7f4594e0a03053290995bcd6501f6f57fdd60ac98a56f2476a296f42ca36/68747470733a2f2f7777772e7265646469747374617469632e636f6d2f6e65772d69636f6e2e706e67' />
  </p>

# Reddit Clone
+ Demo
+ Description
+ Features
+ Deploying Locally

**Demo**
---

https://user-images.githubusercontent.com/79996490/128603054-80632238-b7af-436e-bf85-30c31cd904fe.mp4





**Description**
---
This is a fullstack clone of the popular social media platform reddit. The project was developed using the MERN stack ( MongoDB,Express,React,Node) and hosted on Heroku. 

**Features**
---
This project contains some of the main features of the original reddit website including
  - 🔑 User Authentication ( registering and logging in ) and Authorization 
  - Ability to create and join communities
  - Ability to create community posts

**Deploying Locally**
 1. ```git clone https://github.com/rach-con13/reddit-clone-app.git```
 2. ```cd reddit-clone-app && code . ```
 3. ```npm i --save ``` // to install npm packages
 4. Create ```env``` file in root directory. 
       example:
       ```
         URI = YOUR_MONGO_URI
       ```
 5. Set CORS origin to * on ```index.js``` of node backend
 6. Set ```withCredentials:false``` in both Components/API/withData.jsx and Hooks/useAxios.jsx
