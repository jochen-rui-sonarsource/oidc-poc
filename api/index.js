const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json();

app.get("/api", jsonParser, (req, res) => {
  console.log(req.query);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
