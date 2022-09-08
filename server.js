const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ejs = require('ejs')

app.use("/assets",express.static(__dirname + "/assets"));
app.use("/scripts",express.static(__dirname + "/scripts"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})