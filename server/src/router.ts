import express from "express";
import { Response } from "express";
import repoControllers from "./tables/repos/repos.controllers";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.send("Helloooooo");
});

router.use("/repos", repoControllers);

export default router;
