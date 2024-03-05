var express = require('express');
var router = express.Router();
const postModel = require("./post");
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Createuser',async function(req,res){
     let createduser = await userModel.create({
          username: "raushandgas",
        password: "shery",
         posts:[],  
        email:"raushanarya8@gmail.com",
        fullName: "raushan kumar"
         });
         res.send(createduser)
     
});
  router.get('/allusers', async function(req,res){
   let user =await userModel.findOne({_id:"65e6ba726d6d089b7b628ceb"})
    .populate('posts');
    res.send(user)
  })

router.get('/createpost',async function(req,res){
  let createdpost = await postModel.create({
    postText: "hello everyone! kaise ho",
    user:"65e6ba726d6d089b7b628ceb"

  })
     
  let user = await userModel.findOne({_id:"65e6ba726d6d089b7b628ceb"});
  user.posts.push(createdpost._id)
 
  await user.save();
  res.send("done")
  
 

})

module.exports = router;
