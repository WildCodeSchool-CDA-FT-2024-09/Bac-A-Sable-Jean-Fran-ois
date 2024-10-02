import express from "express";
import { Response } from "express";
import repoControllers from "./controllers/repos.controllers";
import statusControllers from "./controllers/status.controllers";
import langsControllers from "./controllers/langs.controllers";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.send("Helloooooo");
});

router.use("/repos", repoControllers);
router.use("/status", statusControllers);
router.use("/langs", langsControllers);

export default router;
