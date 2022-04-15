import { Request, Response } from "express";
import { Animation } from "../entity/animation";

class animationController {
    public async display(req: Request, res: Response) {
        let animation = await Animation.find();
        res.render('animation/animation', { animation })
    }
}


export default new animationController()