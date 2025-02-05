import express from "express";
import { generateProject } from "../services/project.js";

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const generatedProject = await generateProject(req);
    res.setHeader("Content-Type", "application/json");
    res.send(generatedProject);
  } catch {
    res
      .status(400)
      .send("Invalid body! Ensure topics and difficulty are included.");
  }
});

export default router;
