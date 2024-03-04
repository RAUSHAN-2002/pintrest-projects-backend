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
     
});
router.get('/allusers',async function(req,res){
    let user = await userModel.findone({
      _id:"65e5e474fb24ea3be1ff39de"

    })
    res.send(user)
})

router.get('/createpost',async function(req,res){
  let createpost = await postModel.create({
    postText: "hello everyone",
    // user:"65e5e474fb24ea3be1ff39de"

  })
  // let user = await userModel.findone({_id:"65e5e474fb24ea3be1ff39de"});
  // user.posts.push(createpost._id)
 
  // await user.save();
  // res.send("done")
  
res.s

})

module.exports = router;
