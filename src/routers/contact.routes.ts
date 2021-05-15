import { Router } from "express";
import contactController from "../controllers/contact.controllers";
import nodemailer from "nodemailer";
import contactControllers from "../controllers/contact.controllers";

let router = Router();


router.get('/', contactController.display);

router.post('/send-mail', contactControllers.send)

export default router;