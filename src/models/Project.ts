import { z } from "zod";

export const Project = z.object({
  title: z.string(),
  description: z.string(),
  tips: z.array(z.string()),
});
