const express = require('express');
const path = require("path");
const app = express();
const port = 3000;


app.use("/assets", express.static("assets"));

const staticOptions = {
  extensions: ['html']
};

app.use(express.static(path.join(__dirname, 'production'), staticOptions));

app.listen(port, () => {
  console.log(`Shark Network listening at ${port}`)
});