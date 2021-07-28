import express from "express"; // new method using
import routes from "./routes.js";
//const express = require("express"); //Importing express library
const app = express(); //Create a express app
const port = 3000; //Define default port for the server to listen || Most used routes: 3000(front), 3333(back), 4000(api)

app.use(routes);

// Set everthing running
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
