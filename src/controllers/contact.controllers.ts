import { Request, Response } from "express";
import nodemailer from "nodemailer";
import bodyPaser from "body-parser";
import smtpTransport from "nodemailer-smtp-transport"


class contactController {
    public async display(req: Request, res: Response) {

        res.render('contact/contact');
    }

    public async send(req: Request, res: Response) {
        let { your_name, email, message } = req.body;
        await console.log(req.body.your_name);

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'volinh0607@gmail.com',
                pass: 'maxbnjctjkqrapua'
            }
        });

        let textBody = `From ${req.body.your_name} Email ${req.body.email}`;
        let htmlBody = `From: ${req.body.your_name}; Email: ${req.body.email}; </br> Message${req.body.message}`;
        let mailOptions = {
            from: 'thuy.js.1710@gmail.com',
            to: 'thuy.js.1710@gmail.com',
            subject: 'Sending Email using Node.js',
            text: textBody,
            html: htmlBody,
            
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.redirect('/contact');

    }
}


export default new contactController()