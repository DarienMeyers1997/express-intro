// Bring in Express Code
const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = 3001;

// The next two lines are called MIDDLEWARE and they modify the request before

//parse application/x.www-form-urlencoded
app.use(express.json());
//parse application/json
// app.use(bodyParser.json())

const favoriteMovieList = [
  {
    title: "Star Wars",
    starRating: 5,
    isRecommeded: true,
    createAt: new Date(),
    lastModified: new Date(),
  },
  {
    title: "The Avengers",
    starRating: 4,
    isRecommeded: true,
    createAt: new Date(),
    lastModified: new Date(),
  },
];
console.log(favoriteMovieList);

app.get("/all-movies/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// for (let index = 0; index < favoriteMovieList.length; index++) {
//   const foundMovie = [];

app.get("/single-movie/:titleToSend", (req, res) => {
  const foundMovie = favoriteMovieList.find((movie) => {
    return movie.title === req.params.titleToSend;
  });
  res.json({
    success: true,
    foundMovie: foundMovie,
  });

});
app.post("/new-movie/", (req, res) => {
  favoriteMovieList.push(req);
  res.json({
    success: true,
  });
});
app.put("/update-movie/:titleToSend", (req, res) => {
  foundMovie = favoriteMovieList.find((movie) => {
    return movie.title === req.params.titleToSend;
  });
  res.json({
    success: true,
    foundMovie: foundMovie,
  });
});
app.delete("/delete-movie/:titleToSend", (req, res) => {
  foundMovie = favoriteMovieList.find((movie) => {
    return movie.title === req.params.titleToSend;
  });
  res.json({
    success: true,
    foundMovie: foundMovie,
  });
});

// return foundMovie;
//I couldn't figure out what to do for this one. I am severely lacking in my knowledge up to this point in class. I struggled pretty bad in WDI 100.
//}

//console.log(foundMovie);
