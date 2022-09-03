const express = require('express');
const path = require('path');
const app = express()



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use( express.static( "public" ) );
app.set('view engine','ejs');
require('./routes/routes')(app);

require('dotenv').config()

const mongoose = require('mongoose');
const Clip = require('./models/clip');
    
    mongoose.connect(process.env.MONGO_SERVER, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
})


port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})