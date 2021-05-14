const express=require('express');
const path=require('path');
const port=8000;

// mongoose
const db=require('./config/mongoose');

//schema
const Contact = require('./models/contact');


const app=express();


app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

//middleare to append new contact
app.use(express.urlencoded());

//middleware to access static files

app.use(express.static('assets'));



// // middleware1
// app.use(function(req,res,next)
// {
//     req.myName="arpan";
//     // console.log('mw one called');
//     next();
// });

// //middleware2
// app.use(function(req,res,next)
// {
//     console.log("myname from mw2",req.myName);
//     // console.log('mw two called');
//     next();
// });

var contactList=[
    {
        name:"Tony Stark",
        phone:"3000"
    },
    {
        name:"Captain America",
        phone:"110011001"
    },
    {
        name:"Joker",
        phone:"100110101"
    }
];


app.get('/',function(req,res)
{


    Contact.find({},function(err,contacts)
    {
        if (err)
        {
            console.log('Error in fetchinh contacts from db');
            return;
        }
        return res.render('home',{
                title:"My contatct list",
                contact_List:contacts
            });
    });

});

app.get('/practice',function(req,res)
{
    
    return res.render('practice',{
        title:"let us play with ejs"
    });
});

app.post('/create-contact',function(req,res)
{
    
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact)
    {
        if(err)
        {
            console.log('error in creating the contact');
            return;
        }
        else
        
        {
            console.log('******',newContact);
            return res.redirect('back'); 
        }
    });

});



//query params
//deleting a contact


app.get('/delete-contact',function(req,res)
{
    

    //del from db using id

    // get the id from query in the url
    let id=req.query.id;

    //find the contact in the db using id and delete

    Contact.findByIdAndDelete(id,function(err)
    {
        if (err)
        {
            console.log('error in deleting an obj from db');
            return;
        }

        return res.redirect('back');
    });
    
    

});



app.listen(port,function(err)
{
    if (err)
    {
        console.log('error in running the server ',err);
    }
    else{
        console.log("Yup ! My express server is running on port",port);
    }
});