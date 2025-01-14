const express = require("express");
const app = express();
const port = 8080;
const project = require("./src/routes/project");

app.use(express.json());

app.use("/project", project);
app.listen(port, () => {
  console.log(`proj.ai backend running 🚀`);
});
