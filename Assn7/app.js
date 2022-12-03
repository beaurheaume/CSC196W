//from lect slides----------------
'use strict';
const express = require('express');
const app = express();
//end lect slides given------------

//GET endpoint for exercise 1
app.get('/math/circle/:r?', function (req, res) {
    const radius = req.params['r'];   //get radius from req
    if(!req.params['r']){   //if req has nothing
        //400 response status code indicates that the server cannot 
        //or will not process the request 
        //due to something that is perceived to be a client error
        return res.status(400).send("Missing Required GET parameter: '/math/circle/:r'");
    }
    else if( isNaN(radius) ){ //if radius isNotaNumber
        return res.status(400).send("Required GET parameter, '/math/circle/:r' needs to be a number.");
    }else{
        res.type('json');   //return type
        res.status(200);    //OK status
        //all the work happens here
        //A = πr^2 C = 2πr
        res.json({
            "area":Math.PI * (radius ** 2), //should be r^2 here
            "circumference":Math.PI*2*radius
        })
    }
});

// GET endpoint for exercise 2
app.get('/hello/name',function (req,res){
    if(!req.query['first'] && !req.query['last']) { //if  missing name components
        return res.status(400).send("Missing Required GET parameters: first and last");
    }
    else if(!req.query['first']) {  //if missing first name
        return res.status(400).send("Missing Required GET parameter: /hello/name/:first");
    }
    else if(!req.query['last']) {   //or missing last name
        return res.status(400).send("Missing Required GET parameter: /hello/name/:last");
    }
    res.type('text');
    res.status(200);
    //req.query[nametype] are sent in explicitly or fail as above
    res.send("Hello "+req.query['first']+" "+req.query['last']);
});

//also from lec slides----------------
app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
//end of this sec of lect slides info-