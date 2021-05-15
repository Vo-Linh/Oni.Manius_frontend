import { Request, Response } from "express";
import nodemailer from "nodemailer";


class contactController {
    public async display(req: Request, res: Response) {

        res.render('contact/contact');
    }

    public async send(req: Request, res: Response) {
        let { your_name, email, message } = req.body;
        await console.log(req.body);

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'volinh0607@gmail.com',
                pass: 'tienhoncame'
            }
        });

        let mailOptions = {
            from: 'volinh0607@gmail.com',
            to: 'volinh0607@gamil.com',
            subject: 'Sending Email using Node.js',
            your_name: req.body.your_name,
            email: req.body.email,
            message: req.body.message,
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.redirect('/contact/');

    }
}


export default new contactController()