const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose=require("mongoose");
const md5=require("md5")


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/loginCheck',express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema=new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    img: String,
    descrpitor: String
});

const User=new mongoose.model("User",userSchema);

app.get('/', function(req, res){
    res.render('home');
})

app.get('/login', async (req, res,next) =>{

    res.render('login');
})

app.post("/login",function(req,res){
    const username=req.body.username;
    const password=md5(req.body.password);

    User.findOne({email:username},function(err,results){
        if(err){
            console.log(err);
        }
        else{
            if(results){
                if(results.password===password){
                    res.redirect("/loginCheck/"+username);
                }
            }
        }
    })
})

app.get('/register', function(req, res){
    res.render('register');
})

app.post("/register",function(req,res){
    const newUser=new User({
       email: req.body.username,
       password:md5(req.body.password),
       name:req.body.name,
       img:req.body.imgURL,
       descrpitor:req.body.imgDesc
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log(req.body.username)
            console.log(md5(req.body.imgDesc))
            res.redirect("login");
        }
    });
});

app.get('/loginCheck/:email', function(req, res){
    const Email = req.params.email;
    User.findOne({email:Email}, function(err, results){
        if(err){
            console.log(err);
        }
        else{
            if(results){
                res.render('loginCheck', {desc:results.descrpitor});
            }
        }
    });
});

app.get('/userDash', function(req, res){
    res.render('userDashboard');
})

app.get('/topicPage', function(req, res){
    res.render('topicPage');
})

app.get('/approachtoaiPage', function(req, res){
    res.render('approachtoaiPage');
})
app.get('/fuzzysetsPage', function(req, res){
    res.render('fuzzysetsPage');
})
app.get('/nlpPage', function(req, res){
    res.render('nlpPage');
})
app.get('/multiagentsPage', function(req, res){
    res.render('multiagentsPage');
})
app.get('/algoPage', function(req, res){
    res.render('algoPage');
})
app.listen(3000, ()=>{
    console.log('Server running on Port 3000');
})
