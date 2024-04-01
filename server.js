const express = require("express")
const app =  express();
const PORT = process.env.PORT || 3000
const ejs = require("ejs")
const path = require( "path" );
const expressLayout = require("express-ejs-layouts")
const mongoose = require( 'mongoose' ) ;
const url = "mongodb://localhost:27017/pizza"
// Database connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


app.use(express.static('public'))
app.use(expressLayout);
app.set('views',path.join( __dirname ,'resources/views'));
app.set( 'view engine', 'ejs');

require('./routes/web.js')(app)



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})