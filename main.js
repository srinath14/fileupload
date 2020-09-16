const express = require("express");
const upolad = require("express-fileupload");
const app = express();
app.use(upolad());
port = process.env.port || 3000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(400).send("no file is uploaded");
  }
  let file = req.files.images;
  var filename = file.name;
  file.mv("./" + filename, (err) => {
    if (err) {
      res.status(400).send("there is some error in the uploading");
    } else {
      res.sendFile(__dirname + "/success.html");
    }
  });
});
app.listen(port, () => {
  console.log("listenging at port ", port);
});
