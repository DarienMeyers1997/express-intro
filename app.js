/*
npm install nodemon - Installs nodemon library
npm install --save-dev nodemon - Installs package-lock.json 
npm install express - Installs package.json 
*/
const express = require("express"); //enables us to use any modules we create
const movies = require("./movies");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ DataTransferItem: movies });
});

app.get("/about", (req, res) => {
  res.status(200).send("from about page");
});

app.get("/action", (req, res) => {
  const actionFilms = movies.filter((elem) => {
    //.includes
    //.search
    return elem.Genre.includes("Action");
  });
  // console.log(actionFilms);
  res.status(200).json({ data: actionFilms });
});

app.get("/genre/:genreName", (req, res) => {
  //http://localhost:3000/genre/action
  console.log(req.params);
  console.log(req.params.genreName);
  const genre = req.params.genreName.toLowerCase();
  const filterByGenre = movies.filter((film) => {
    return film.Genre.toLowerCase().includes(genre);
  });

  res.status(200).json({ data: filterByGenre });
});

//Create = POST request
//Update = PUT request
//Delete = DELETE request

// app.listen - Is listening for PORT = 3001
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
