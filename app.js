/*
npm install nodemon - Installs nodemon library
npm install --save-dev nodemon - Installs package-lock.json 
npm install express - Installs package.json 
*/
const express = require("express"); //enables us to use any modules we create
const movies = require("./movies");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.status(200).json({ DataTransferItem: movies });
});

app.get("/about", (req, res) => {
  res.status(200).send("from about page");
});
// app.listen - Is listening for PORT = 3001
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
