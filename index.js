import express from "express";
import project from "./src/routes/project.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/project", project);
app.listen(port, () => {
  console.log(`proj.ai backend running 🚀`);
});
