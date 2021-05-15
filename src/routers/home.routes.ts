import { Router } from "express";
import indexControllers from "../controllers/home.controller";

let router = Router();

router.get('/' , indexControllers.display);

export default router;