import { Router } from "express";
import aboutControllers from "../controllers/about.controllers";

let router = Router();

router.get('/' , aboutControllers.display);

export default router;