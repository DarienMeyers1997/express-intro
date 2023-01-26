// Bring in Expresss Code
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const favoriteMovieList = [
  {
    title: "Star Wars",
    starRating: 5,
    isRecommeded: true,
    createAt: new Date(),
  },
  {
    title: "Star Wars",
    starRating: 5,
    isRecommeded: true,
    createAt: new Date(),
  },
];

app.get("/", (req,res)=>{
    req.setEncoding("Hello World!")
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
