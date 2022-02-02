// server/index.js

/* setup .env file ----------------------*/
const dotenv = require('dotenv').config();
if (process.env.NODE_ENV !== "Production"){
    require ('dotenv').config();
}

/* needed to connect client and backend when deploying to heroku" */
const path = require('path');

/* setup express -----------------------*/
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const session = require('express-session');
const axios = require('axios');
const bodyParser = require('body-parser')

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

/* require our mongoose model(s) that we have created in the models folder */
const Lead = require('./models/lead.js'); 


/* boilerplate to setup mongoose ------------*/
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1/marbleous';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('MONGO CONNECTION OPEN');
    })
    .catch((err)=>{
        console.log('MONGO CONNECTION ERROR!!!');
        console.log(err);
    });

/* Create secret ---------------------------*/
const secret = process.env.SECRET || 'notagoodsecret';

/* Boilerplate for connect-mongo ---------------------------*/
const MongoStore = require('connect-mongo');

/*Middleware for the session --------------------- */
const store = new MongoStore({
    mongoUrl: dbUrl,
    secret: secret,
    touchAfter: 24*60*60
});

store.on("error",function(e){
    console.log("SESSION STORE ERROR",e)
})

app.use(session({
    store,
    name: 'session',
    secret: secret,
    resave: true,
    saveUninitialized: true,
}));

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET routes -----------------------*/
app.get("/leads", async(req, res) => {
    const allLeads = await Lead.find({});
    res.json(allLeads);
});

app.get("/primenumbers/:max", async(req, res) => {
    let max = req.params.max;
    let primeNumbers = [2];
    let notPrimeNumbers = [];
    for(let i = 3 ; i<max; i++){
        let numberModuli = primeNumbers.map(primeNumber => i%primeNumber)
        let prime = numberModuli.find(number => number === 0);
        if(prime===0){
            notPrimeNumbers = [...notPrimeNumbers, i];
        }
        else{
            primeNumbers = [...primeNumbers, i];
        }
        
    }
    res.json([1,...primeNumbers]);
});


/* POST routes */
app.post('/newlead', jsonParser, async (req,res)=>{
    try {
        const {email} = req.body;
        const lead = new Lead({email})
        await lead.save()
        console.log(`Successfuly saved ${lead}`)
        res.redirect('/');
    }
    catch (e) {
        console.log("The lead was not saved");
        console.log(e);
    }
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

/* Listen to port  ---------------------*/
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });