require("dotenv").config({ path: "goodboy.config" });
const express = require("express");
const path = require("path")
const stylus = require("stylus")

const app = express();
const port = 3000;

const env = process.env

const publicRoute = `${env.GB_SERVER_ROOT}/${env.GB_PUBLIC_DIR}`

app.set("view engine", "pug");
app.set("views", `${env.GB_SERVER_ROOT}/${env.GB_VIEW_DIR}`);

app.get('/', (req, res) => {
  res.render(`${env.GB_MAIN}`);
});

app.use(
  stylus.middleware({
    src: `${__dirname}/../${publicRoute}${env.GB_ISTYLES}`,
    dest: `${__dirname}/../${publicRoute}${env.GB_OSTYLES}`,
    compile: (str, filePath) => stylus(str).set('filename', filePath),
  })
);

app.use(express.static(publicRoute))

app.listen(port, () => {
  console.log(`Great job, doggy! http://localhost:${port}`);
});