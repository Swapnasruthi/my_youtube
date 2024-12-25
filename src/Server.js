const express = require("express");
const {connectDB} = require("./database/Database");
const User = require("./models/userSchema");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 5000;

app.use(cors(
    {
        origin:"http://localhost:3000",
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        credentials:true
    }
));

app.options('*', cors());
app.use(cookieParser()); 
app.use(express.json());

app.post("/signup",async (req,res)=>{

    try{
        const {userName, email, password} = req.body;
        const passwordHash = await bcrypt.hash(password,10);

        const user = new User({
            userName,
            email,
            password:passwordHash
        });
        
        await user.save();
        const token = await jwt.sign({id:user._id},"my_youtube@123");

        res.cookie("token",token);
        res.send(user);
    }
    catch(err){
        res.status(401).send(err.message);
    }
});

app.get("/login",async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            throw new Error("User not found!");
        }
        const isValidPass = await bcrypt.compare(password, user.password);
        if(!isValidPass){
            throw new Error("Incorrect password");
        }
        else{
            const token = await jwt.sign({id:user._id},"my_youtube@123");
            res.cookie("token",token);
            res.send(user);
        }
    }
    catch(err){
        res.status(401).send(err.message);

    }
});


connectDB()
.then(
    ()=>{
        console.log("connected successfully!");
        app.listen(PORT,()=>{
            console.log("server is running");
        })
    }
)
.catch(
    (err)=>{
        console.error("Database cannot be connected"+err.name);
    }
)
