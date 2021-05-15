import { Router } from "express";
import blogController from "../controllers/blog.controllers";

let router = Router();

router.get('/' , blogController.display);

export default router;