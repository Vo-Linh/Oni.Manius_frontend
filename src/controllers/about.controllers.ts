import { Request, Response } from "express";
import { Member } from "../entity/member";

class aboutController {
    public async display(req: Request, res: Response) {
        let member = await Member.find();
        res.render('about/about', { member })
    }
}


export default new aboutController()