// 1st lecture

// const express=require('express');

// const port=8000;

// const app=express();

// app.get('/',function(req,res)
// {
//     res.send("cool,it is running or is it!");
// });

// app.get('/profile',function(req,res)
// {
//     res.send("cool,it is running or is it!");
// });


// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });










//futher lecture
// const express=require('express');

// const port=8000;

// const app=express();

// app.get('/',function(req,res)
// {
//     console.log(req);
//     res.send("cool,it is running or is it!");
// });

// app.get('/profile',function(req,res)
// {
//     res.send("cool,it is running or is it!");
// });


// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });








//next lecture
// const express=require('express');
// const path=require('path');
// const port=8000;

// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
    
//     return res.render('home',{
//         title:"My contatct list",
//         contact_List:contactList
//     });
// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
//     return res.redirect('/practice');
// });


// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });







//next lecture


// const express=require('express');
// const path=require('path');
// const port=8000;

// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));



// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
    
//     return res.render('home',{
//         title:"My contatct list",
//         contact_List:contactList
//     });
// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
    
//     return res.redirect('/practice');
// });


// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });



















//lecture



// const express=require('express');
// const path=require('path');
// const port=8000;

// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

// app.use(express.urlencoded());

// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
    
//     return res.render('home',{
//         title:"My contatct list",
//         contact_List:contactList
//     });
// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
//     contactList.push({
//         name:req.body.name,
//         phone:req.body.phone // push(req.body);

//     });
//     return res.redirect('/'); //return res.redirect('back');
    
//     // return res.redirect('/practice');
// });


// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });









//middleware

// const express=require('express');
// const path=require('path');
// const port=8000;

// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

// app.use(express.urlencoded());

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

// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
//     console.log(req.myName);
    
//     return res.render('home',{
//         title:"My contatct list",
//         contact_List:contactList
//     });
// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
//     contactList.push({
//         name:req.body.name,
//         phone:req.body.phone // push(req.body);

//     });
//     return res.redirect('/'); //return res.redirect('back');
    
//     // return res.redirect('/practice');
// });


// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });






//static files

// const express=require('express');
// const path=require('path');
// const port=8000;

// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

// //middleare to append new contact
// app.use(express.urlencoded());

// //middleware to access static files

// app.use(express.static('assets'));



// // // middleware1
// // app.use(function(req,res,next)
// // {
// //     req.myName="arpan";
// //     // console.log('mw one called');
// //     next();
// // });

// // //middleware2
// // app.use(function(req,res,next)
// // {
// //     console.log("myname from mw2",req.myName);
// //     // console.log('mw two called');
// //     next();
// // });

// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
//     console.log(req.myName);
    
//     return res.render('home',{
//         title:"My contatct list",
//         contact_List:contactList
//     });
// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
//     contactList.push({
//         name:req.body.name,
//         phone:req.body.phone // push(req.body);

//     });
//     return res.redirect('/'); //return res.redirect('back');
    
//     // return res.redirect('/practice');
// });


// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });








// const express=require('express');
// const path=require('path');
// const port=8000;

// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

// //middleare to append new contact
// app.use(express.urlencoded());

// //middleware to access static files

// app.use(express.static('assets'));



// // // middleware1
// // app.use(function(req,res,next)
// // {
// //     req.myName="arpan";
// //     // console.log('mw one called');
// //     next();
// // });

// // //middleware2
// // app.use(function(req,res,next)
// // {
// //     console.log("myname from mw2",req.myName);
// //     // console.log('mw two called');
// //     next();
// // });

// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
//     // console.log(req.myName);
    
//     return res.render('home',{
//         title:"My contatct list",
//         contact_List:contactList
//     });
// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
//     contactList.push({
//         name:req.body.name,
//         phone:req.body.phone // push(req.body);

//     });
//     return res.redirect('/'); //return res.redirect('back');
    
//     // return res.redirect('/practice');
// });

// //params or String params
// // app.get('/delete-contact/:phone',function(req,res)
// // {
// //     console.log(req.params);
// //     let phone=req.params.phone;


// // });


// //query params
// //deleting a contact
// app.get('/delete-contact',function(req,res)
// {
//     //console.log(req.query);

//     //get the query from url
//     let phone=req.query.phone;

//     let contactIndex=contactList.findIndex(contact => contact.phone == phone);

//     if (contactIndex != -1)
//     {
//         contactList.splice(contactIndex,1);
//     }
//     return res.redirect('back');



// });



// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });








// DATABASE


// const express=require('express');
// const path=require('path');
// const port=8000;

// // mongoose
// const db=require('./config/mongoose');

// //schema
// const Contact = require('./models/contact');


// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

// //middleare to append new contact
// app.use(express.urlencoded());

// //middleware to access static files

// app.use(express.static('assets'));



// // // middleware1
// // app.use(function(req,res,next)
// // {
// //     req.myName="arpan";
// //     // console.log('mw one called');
// //     next();
// // });

// // //middleware2
// // app.use(function(req,res,next)
// // {
// //     console.log("myname from mw2",req.myName);
// //     // console.log('mw two called');
// //     next();
// // });

// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
//     // console.log(req.myName);
    
//     return res.render('home',{
//         title:"My contatct list",
//         contact_List:contactList
//     });
// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
//     contactList.push({
//         name:req.body.name,
//         phone:req.body.phone // push(req.body);

//     });
//     return res.redirect('/'); //return res.redirect('back');
    
//     // return res.redirect('/practice');
// });

// //params or String params
// // app.get('/delete-contact/:phone',function(req,res)
// // {
// //     console.log(req.params);
// //     let phone=req.params.phone;


// // });


// //query params
// //deleting a contact
// app.get('/delete-contact',function(req,res)
// {
//     //console.log(req.query);

//     //get the query from url
//     let phone=req.query.phone;

//     let contactIndex=contactList.findIndex(contact => contact.phone == phone);

//     if (contactIndex != -1)
//     {
//         contactList.splice(contactIndex,1);
//     }
//     return res.redirect('back');



// });



// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });













// // populating the db

// const express=require('express');
// const path=require('path');
// const port=8000;

// // mongoose
// const db=require('./config/mongoose');

// //schema
// const Contact = require('./models/contact');


// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

// //middleare to append new contact
// app.use(express.urlencoded());

// //middleware to access static files

// app.use(express.static('assets'));



// // // middleware1
// // app.use(function(req,res,next)
// // {
// //     req.myName="arpan";
// //     // console.log('mw one called');
// //     next();
// // });

// // //middleware2
// // app.use(function(req,res,next)
// // {
// //     console.log("myname from mw2",req.myName);
// //     // console.log('mw two called');
// //     next();
// // });

// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
//     // console.log(req.myName);
    
//     return res.render('home',{
//         title:"My contatct list",
//         contact_List:contactList
//     });
// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
//     //now no need to push in array push in db or schema

//     // contactList.push({
//     //     name:req.body.name,
//     //     phone:req.body.phone // push(req.body);

//     // });

//     Contact.create({
//         name:req.body.name,
//         phone:req.body.phone
//     },function(err,newContact)
//     {
//         if(err)
//         {
//             console.log('error in creating the contact');
//             return;
//         }
//         else
//         {
//             console.log('******',newContact);
//             return res.redirect('back'); 
//         }
//     });


//     // return res.redirect('/'); //return res.redirect('back');
    
//     // return res.redirect('/practice');
// });

// //params or String params
// // app.get('/delete-contact/:phone',function(req,res)
// // {
// //     console.log(req.params);
// //     let phone=req.params.phone;


// // });


// //query params
// //deleting a contact
// app.get('/delete-contact',function(req,res)
// {
//     //console.log(req.query);

//     //get the query from url
//     let phone=req.query.phone;

//     let contactIndex=contactList.findIndex(contact => contact.phone == phone);

//     if (contactIndex != -1)
//     {
//         contactList.splice(contactIndex,1);
//     }
//     return res.redirect('back');



// });



// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });

























// // fecthing from db



// const express=require('express');
// const path=require('path');
// const port=8000;

// // mongoose
// const db=require('./config/mongoose');

// //schema
// const Contact = require('./models/contact');


// const app=express();


// app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));

// //middleare to append new contact
// app.use(express.urlencoded());

// //middleware to access static files

// app.use(express.static('assets'));



// // // middleware1
// // app.use(function(req,res,next)
// // {
// //     req.myName="arpan";
// //     // console.log('mw one called');
// //     next();
// // });

// // //middleware2
// // app.use(function(req,res,next)
// // {
// //     console.log("myname from mw2",req.myName);
// //     // console.log('mw two called');
// //     next();
// // });

// var contactList=[
//     {
//         name:"Tony Stark",
//         phone:"3000"
//     },
//     {
//         name:"Captain America",
//         phone:"110011001"
//     },
//     {
//         name:"Joker",
//         phone:"100110101"
//     }
// ];


// app.get('/',function(req,res)
// {
    
//     // now no need to do show array 
//     // return res.render('home',{
//     //     title:"My contatct list",
//     //     contact_List:contactList
//     // });

//     // fetch ffrom db and show it

//     Contact.find({},function(err,contacts)
//     {
//         if (err)
//         {
//             console.log('Error in fetchinh contacts from db');
//             return;
//         }
//         return res.render('home',{
//                 title:"My contatct list",
//                 contact_List:contacts
//             });
//     });

// });

// app.get('/practice',function(req,res)
// {
    
//     return res.render('practice',{
//         title:"let us play with ejs"
//     });
// });

// app.post('/create-contact',function(req,res)
// {
//     //now no need to push in array push in db or schema

//     // contactList.push({
//     //     name:req.body.name,
//     //     phone:req.body.phone // push(req.body);

//     // });

//     Contact.create({
//         name:req.body.name,
//         phone:req.body.phone
//     },function(err,newContact)
//     {
//         if(err)
//         {
//             console.log('error in creating the contact');
//             return;
//         }
//         else
//         {
//             console.log('******',newContact);
//             return res.redirect('back'); 
//         }
//     });


//     // return res.redirect('/'); //return res.redirect('back');
    
//     // return res.redirect('/practice');
// });

// //params or String params
// // app.get('/delete-contact/:phone',function(req,res)
// // {
// //     console.log(req.params);
// //     let phone=req.params.phone;


// // });


// //query params
// //deleting a contact
// app.get('/delete-contact',function(req,res)
// {
//     //console.log(req.query);

//     //get the query from url
//     let phone=req.query.phone;

//     let contactIndex=contactList.findIndex(contact => contact.phone == phone);

//     if (contactIndex != -1)
//     {
//         contactList.splice(contactIndex,1);
//     }
//     return res.redirect('back');



// });



// app.listen(port,function(err)
// {
//     if (err)
//     {
//         console.log('error in running the server ',err);
//     }
//     else{
//         console.log("Yup ! My express server is running on port",port);
//     }
// });













// deleting from db




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
    
    // now no need to do show array 
    // return res.render('home',{
    //     title:"My contatct list",
    //     contact_List:contactList
    // });

    // fetch ffrom db and show it

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
    //now no need to push in array push in db or schema

    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone // push(req.body);

    // });

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


    // return res.redirect('/'); //return res.redirect('back');
    
    // return res.redirect('/practice');
});

//params or String params
// app.get('/delete-contact/:phone',function(req,res)
// {
//     console.log(req.params);
//     let phone=req.params.phone;


// });


//query params
//deleting a contact


app.get('/delete-contact',function(req,res)
{
    //console.log(req.query);
    // remove array one use db

    //get the query from url
    // let phone=req.query.phone;

    // let contactIndex=contactList.findIndex(contact => contact.phone == phone);

    // if (contactIndex != -1)
    // {
    //     contactList.splice(contactIndex,1);
    // }
    // return res.redirect('back');

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