const express=require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('./models/user');
const cors=require('cors');
const dotenv=require('dotenv');



dotenv.config();

const app=express();

app.use(express.json());

const allowedOrigins = ['http://localhost:8081', 'https://your-frontend-domain.com'];
app.use(cors({
    origin: function(origin,callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null,true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    }
}));


mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
    console.log('Connected to MongoDB');
    })
    .catch((err)=>{   
    console.log(err);
    })


const JWT_KEY=process.env.JWT_KEY;


app.post('/register',async(req,res)=>{ 
    const {username,password}=req.body;

    const UserExists =await User.findOne({username});
    if(UserExists){
        return res.status(400).json({message:'User already exists'});
    }
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser= new User({username,password:hashedPassword});
    await newUser.save();
    res.status(201).json({message:'User created successfully'});
 });

app.post('/login',async(req,res)=>{ 
    const {username,password}=req.body;

    const user1 =await User.findOne({username});

    if (!user1) return res.status(401).json({ message: 'User not found' });

    const match = await bcrypt.compare(password, user1.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });


    const token = jwt.sign({ id: user1._id }, JWT_KEY, { expiresIn: '1h' });
    res.json({ token });
 });


function verifyToken(req,res,next){
    

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}





 app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: Hello ${req.user.username}, this is protected data. });
});


 const PORT = process.env.PORT;
app.listen(PORT, () => console.log(🚀 Server running on port ${PORT}));