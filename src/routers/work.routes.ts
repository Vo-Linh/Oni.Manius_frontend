import { Router } from "express";
import workController from "../controllers/work.controllers";

let router = Router();

router.get('/' , workController.display);

export default router;