require("dotenv").config({ path: "goodboy.config" });
const express = require("express");

const app = express();
const port = 3000;

const env = process.env

app.set("view engine", "pug");
app.set("views", `${env.GB_SERVER_ROOT}/${env.GB_VIEW_DIR}`);

app.get('/', (req, res) => {
  res.render(`${env.GB_MAIN}`);
});

app.use(express.static(`${env.GB_SERVER_ROOT}/${env.GB_PUBLIC_DIR}`))

app.listen(port, () => {
  console.log(`Great job, doggy! http://localhost:${port}`);
});