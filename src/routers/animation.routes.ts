import { Router } from "express";
import animationController from "../controllers/animation.controllers";

let router = Router();

router.get('/' , animationController.display);

export default router;