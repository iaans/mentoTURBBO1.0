import express from "express";
import { substract, sum } from "./controllers/index.js";

const app = express.Router();

//Define / route
// app.get("/", (req, res) => {
//   res.send("Hello World!"); // Send the response for this route
// });

app.get("/", (req, res) => {
  res.send("javascript is better language programming, after of JAVA"); // Send the response for this route
});

app.get("/is-alive", (req, res) => {
  res.send(true);
});

// get route with query params
app.get("/sum", (req, res) => {
  const { num1, num2 } = req.query;

  res.send(String(sum(num1, num2)));
});

// get route with url params
app.get("/subtract/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  res.send(String(substract(num1, num2)));
});

app.post("/submit-user", (req, res) => {
  console.log(req.body);
  // const { name, age, height } = req.body;
  // console.log("🚀 ~ file: routes.js ~ line 34 ~ app.post ~ height", height);
  // console.log("🚀 ~ file: routes.js ~ line 34 ~ app.post ~ age", age);
  // console.log("🚀 ~ file: routes.js ~ line 34 ~ app.post ~ name", name);

  res.send("ok");
});
export default app;
