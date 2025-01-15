import express from "express";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { Project } from "../models/Project.js";

const router = express.Router();
const openai = new OpenAI();

router.post("/generate", async (req, res) => {
  if (req.body.topics === undefined || req.body.difficulty === undefined) {
    res
      .status(400)
      .send("Invalid body! Ensure topics and difficulty are included.");
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Generate a project for a CS student given the topics and difficulty.",
      },
      {
        role: "user",
        content: `Topics: ${req.body.topics}, Difficulty: ${req.body.difficulty}`,
      },
    ],
    response_format: zodResponseFormat(Project, "event"),
  });

  res.send(completion.choices[0].message.content);
});

export default router;
