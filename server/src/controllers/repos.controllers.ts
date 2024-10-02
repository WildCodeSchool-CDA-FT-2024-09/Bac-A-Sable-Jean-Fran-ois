import express, { Response, Request } from "express";

import { Repo } from "../entities/repo";
import { Status } from "../entities/status";
import { Lang } from "../entities/langs";
import { In } from "typeorm";

const repoControllers = express.Router();

repoControllers.get("/", async (_: any, res: Response) => {
  try {
    const repos = await Repo.find({
      relations: {
        status: true,
        langs: true,
      },
    });
    res.status(200).json(repos);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

repoControllers.post("/", async (req: Request, res: Response) => {
  try {
    const repo = new Repo();
    repo.id = req.body.id;
    repo.name = req.body.name;
    repo.url = req.body.url;

    const status = await Status.findOneOrFail({
      where: { id: req.body.isPrivate },
    });
    repo.status = status;

    const langs = await Lang.find({
      where: { id: In(req.body.langs.map((l: number) => l)) },
    });
    repo.langs = langs;

    await repo.save();
    res.status(201).json(repo);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default repoControllers;
