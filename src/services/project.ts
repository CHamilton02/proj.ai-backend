import { Request } from "express";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { Project } from "../models/Project.js";

const openai = new OpenAI();

export async function generateProject(req: Request) {
  if (req.body.topics === undefined || req.body.difficulty === undefined) {
    throw new Error();
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
    response_format: zodResponseFormat(Project, "project"),
  });

  return completion.choices[0].message.content;
}
