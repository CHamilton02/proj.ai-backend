import express from "express";
import project from "./routes/project.js";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use("/project", project);
app.listen(port, () => {
  console.log(`proj.ai backend running 🚀`);
});
