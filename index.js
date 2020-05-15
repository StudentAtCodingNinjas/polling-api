const express = require("express");
const app = express();
const db = require("./config/mongoose");
const port = 8000;

// Body Parser 
app.use(express.urlencoded({extended: true}));


// use express router
app.use("/", require("./routes"));

//Listen to the server
app.listen(port, function(err) {
  if (err) {
    console.log("Error Running the Server", err);//if error
  }
  console.log("Server is up and running on port: ", port);//if success
});