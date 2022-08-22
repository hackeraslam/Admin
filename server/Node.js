const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require("cors");
const { db } = require('./models/Users');



app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aslamkhan:Pakistan@cluster0.niryypt.mongodb.net/AdminPanel?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

app.delete('/delete/:_id', async (req,res)=>{
    const id = req.params._id;

    try{
        const result = await UserModel.deleteOne({_id: id});
        console.log(id);
    }
    catch(err)
    {
        console.log(err);
    }
})


app.put('/update', async (req,res)=>{
    console.log(req.body)


    try{

    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const phone = parseInt(req.body.phone);
    const country = req.body.country;
    const id = req.body.id;
    console.log(id);
        await UserModel.findById(id, (error, val)=>{

            if(error)
            {
                console.log(error);
            }
            else
            {
            console.log("data updated");
            val.name = name;
            val.username = username;
            val.email = email;
            val.phone = phone;
            val.country = country;
            val.save();
            }

            
        })
    }
    catch(err)
    {
        console.log(err);
    }
})

app.get('/userslist', (req, res)=>{
    UserModel.find({}, (err, user)=> {
        if(err)
        {
            console.log(err);
        }
        else
        {
            
            res.send(user);
        }
    })
});



app.get("/", async (req, res)=>{
    res.send("API Root");
})
app.post("/users", async (req, res)=>{

    console.log(req.body);
    const n = req.body.name;
    const uname = req.body.username;
    const pass = req.body.pass;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const country = req.body.country;
    const user = new UserModel({
        name: n,
        username: uname,
        password: pass,
        email: email,
        phone: phone,
        address: address,
        country: country,


    })

        try{
            await user.save();
            res.send("Inserted Data")
            console.log("Data Saved");
        }
        catch(err)
        {
            console.log(err);
        }
})


app.listen(3001, ()=>{
    
    console.log("Server is running on port 3001");
})