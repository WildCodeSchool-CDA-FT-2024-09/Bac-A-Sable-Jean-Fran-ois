import { NextFunction } from "express";
import { z } from "zod";
import { Repo } from "./repos.types";

const schema = z.object({
  id: z.string().max(255, { message: "l'ID est trop long." }),
  name: z.string().max(255, { message: "Le nom est trop long." }),
  url: z.string().max(255, { message: "L'URL est trop longue." }),
  isPrivate: z.number().gt(0).lt(3),
});

export default const validateRepo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schemaValidation: z.SafeParseReturnType<Repo, Repo> = schema.safeParse(
    req.body
  );

  if (!schemaValidation.success) {
    res.status(422).json(schemaValidation.error.issues);
  } else {
    next();
  }
};
