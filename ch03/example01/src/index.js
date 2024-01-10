const express = require("express");
const fs = require("fs");

require("dotenv").config();

const app = express();

// console.log(process.env.SERVER_PORT);
if (!process.env.SERVER_PORT) {
  throw new Error(
    "Please specify the port number for the HTTP server with the environment variable SERVER_PORT."
  );
}

const PORT = process.env.SERVER_PORT || 3000;

app.get("/video", (req, res) => {
  const path = "./videos/SampleVideo_1280x720_1mb.mp4";
  fs.stat(path, (err, stats) => {
    if (err) {
      console.log({ error: err });
      console.error("An error occurred reading file stats.");
      res.sendStatus(500);
      return;
    }
    // console.log(stats);
    res.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": "video/mp4"
    });

    fs.createReadStream(path).pipe(res);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(
    `Microservice fos static video streaming listening on port ${PORT}, point your browser at http://localhost:3000/video`
  );
});
