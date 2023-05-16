const express = require("express"); //enables us to use any modules we create
const app = express();
const PORT = 3001;

// app.listen - Is listening for PORT = 3001
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
