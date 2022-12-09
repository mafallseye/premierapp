const express = require("express");
const serveStatic = require("serve-static");
const bodyParser=require("body-parser")
const cors=require("cors")
const path = require("path");
const app = express();
app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.use(bodyParser.json())
app.use(cors())
const posts=require('../routes/api/posts')
app.use('/api/posts',posts)
app.get("/.*/", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
const port = process.env.PORT || 8080;

app.listen(port);
console.log(`app is listening on port:${port}`);
