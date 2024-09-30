import express, { Response, Request, NextFunction } from "express";
import type { Repo } from "./repos.types";
import repos from "../../../data/repos.json";
import { z } from "zod";

const repoControllers = express.Router();
let myRepos: Repo[] = repos;

const schema: z.ZodObject<
  {
    id: z.ZodString;
    name: z.ZodString;
    url: z.ZodString;
    isPrivate: z.ZodNumber;
  },
  "strip",
  z.ZodTypeAny,
  Repo
> = z.object({
  id: z.string().max(255, { message: "l'ID est trop long." }),
  name: z.string().max(255, { message: "Le nom est trop long." }),
  url: z.string().max(255, { message: "L'URL est trop longue." }),
  isPrivate: z.number().gt(0).lt(3),
});

const validateRepo = (req: Request, res: Response, next: NextFunction) => {
  const schemaValidation: z.SafeParseReturnType<Repo, Repo> = schema.safeParse(
    req.body
  );

  if (!schemaValidation.success) {
    res.status(422).json(schemaValidation.error.issues);
  } else {
    next();
  }
};

// --------------- GET
repoControllers.get("/", (_: any, res: Response) => {
  res.status(200).json(myRepos);
});

repoControllers.get("/:id", (req: Request, res: Response) => {
  const repo = myRepos.find((rep) => rep.id === req.params.id) as Repo;

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

// --------------- POST
repoControllers.post("/", validateRepo, (req: Request, res: Response) => {
  myRepos.push(req.body);
  res.status(201).json(req.body);
});

repoControllers.delete("/:id", (req: Request, res: Response) => {
  const index = myRepos.findIndex((repo) => repo.id == req.params.id);
  if (index !== -1) {
    myRepos.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

repoControllers.put("/", (req: Request, res: Response) => {
  const index = myRepos.findIndex((repo) => repo.id == req.params.id);
  myRepos.splice(index, 1);
});

export default repoControllers;
