const express = require("express"); //importing the express library
const app = express(); //instantiating the express library
const port = 3000; //defining the port to run our application on

//we are defining the main rout of 127.0.0.1:3000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//run the applicaion, we pass the port , so we know what application the port is running on
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
