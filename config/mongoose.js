const mongoose= require('mongoose');

 mongoose.set('useNewUrlParser', true);
 mongoose.set('useFindAndModify', false);
 mongoose.set('useCreateIndex', true);
 mongoose.set('useUnifiedTopology', true);

//Making connection 
mongoose.connect('mongodb://localhost/poll-api');

const db=mongoose.connection;
//for error
 db.on('error', console.error.bind(console,"Error Connecting to Database!!"));

 //on success
 db.once('open', ()=>{
     console.log("Connected to the Data Base!");
 });

 module.exports=db;