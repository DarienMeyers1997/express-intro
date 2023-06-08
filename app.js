/*
npm install nodemon - Installs nodemon library
npm install --save-dev nodemon - Installs package-lock.json 
npm install express - Installs package.json 
*/
const express = require("express"); //enables us to use any modules we create
const movies = require("./movies");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ data: movies });
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

//make a GET route that finds one movie based on title
app.get("/q", (req, res) => {
  console.log(req.query); //{actors: lena}
  let findMovies;
  for (let key in req.query) {
    //takes the first letter and makes it uppercase
    let firstLetter = key[0].toUpperCase();
    //put them back together and remove the first letter of the original string
    let newKey = firstLetter + key.slice(1);

    findMovies = movies.filter((movie) => {
      return movie[newKey].toLowerCase().includes(req.query[key]);
    });
    console.log(findMovies);
  }
  res.status(200).json({ movies: findMovies });
});

//query
app.get("/actors", (req, res) => {
  let values = req.params.Object.keys.values(actors);
  const filterByActor = movies.filter((film) => {
    return film.Actors.toLowerCase().includes(values);
  });
  res.status(200).json({ date: filterByActor });
});

app.delete("/delete-movie/:imdbID", (req, res) => {
  const imdbID = req.params.imdbID;
  const findIndexOfMovie = movies.findIndex((film) => film.imdbID === imdbID);
  movies.splice(findIndexOfMovie, 1);
  res.status(200).json({ data: "movie-deleted" });
});

app.post("/new-movie", (req, res) => {
  const newMovie = {
    Title: req.body.title,
    Year: req.body.year,
    Rated: req.body.rated,
    Released: req.body.released,
    Runtime: req.body.runtime,
    Genre: req.body.genre,
    Director: req.body.director,
    Writer: req.body.writer,
    Actors: req.body.actors,
    Plot: req.body.plot,
    Language: req.body.language,
    Country: req.body.country,
    Awards: req.body.awards,
    Poster: req.body.poster,
    Metascore: req.body.metascore,
    imdbRating: req.body.imdbRating,
    imdbVotes: req.body.imdbVotes,
    imdbID: req.body.imdbID,
    Type: req.body.type,
    Response: req.body.response,
    Images: req.body.images,
  };
  console.log(newMovie);
  let errorArray = [];

  //req.body is always used for POST request
  console.log(req.body);
  for (let key in newMovie) {
    if (req.body[key] === "" || newMovie[key] === undefined) {
      errorArray.push(`${key} key connot be empty`);
    }
    if (key === "images" && newMovie.images.length === 0) {
      errorArray.push();
    }
  }
  if (errorArray.length > 0) {
    return res.status(500).json({ error: true, message: errorArray });
  }
  res.status(200).json({ message: "Success" });
});

app.put("/update-movie/:movieID", (req, res) => {
  const imdbID = req.params.movieID;
  const findIndex = movies.findIndex((film) => film.imdbID === imdbID);
  if (findIndex === -1) {
    return res.status(400).json({ sucess: false, message: "movie not found" });
  }

  //first grab all he current origiinal movie information
  const mov = movies[findIndex];

  //need update information
  const title = req.body.title;
  const year = req.body.year;

  //need to make a new object
  const updateMovieInfo = { ...mov };
  if (title) {
    updateMovieInfo.Title = title;
  }
  if (year) {
    updateMovieInfo.Year = year;
  }

  //Make this PUT more dynamic, not only update title and year but u[date based on what is in the req.body
  //Hint for...in
  //Capital Letter
  for (let key in req.body) {
    if (key) {
      let firstLetter = key[0].toUpperCase();
      let newKey = firstLetter + key.slice(1);

      updateMovieInfo[key] = req.body.body[key];
    }
  }

  //replace back in the information
  movies.splice(findIndex, 1, updateMovieInfo);

  console.log(updateMovieInfo);
  res.status(200).json({ message: "success" });
});

//Create = POST request
//Update = PUT request
//Delete = DELETE request

// app.listen - Is listening for PORT = 3001
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
