/* require our mongoose model(s) that we have created in the models folder */
const Lead = require('./models/lead.js');

/* boilerplate to setup mongoose ------------*/
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1/marbleous';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('MONGO CONNECTION OPEN');
    })
    .catch((err)=>{
        console.log('MONGO CONNECTION ERROR!!!');
        console.log(err);
    });

/* import new data => first creation to create song collection-----------------------------*/

const s = new Lead({
    email: "gilles.rossou4@gmail.com"
})

s.save().then((data)=>{
    console.log(data);
})
.catch(e=>{
    console.log('SAVING DID NOT WORK');
    console.log(e);
})


/* inserting additional batch of songs */

const seedLeads = [
    {
        email: "gilles.rossou2@gmail.com"
    },
    {
        email: "gilles.rossou3@gmail.com"
    },
];

Lead.insertMany(seedLeads).then((res=>{
    console.log(res);
}))
.catch(e=>{
    console.log('INSERTING FAILED');
    console.log(e);
});

