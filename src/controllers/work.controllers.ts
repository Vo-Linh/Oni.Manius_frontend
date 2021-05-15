import { Request, Response } from "express";
import { Products } from "../entity/Products";

class workController {
    public async display(req: Request, res: Response) {
        let product = await Products.find();
        res.render('work/work', { product })
    }
}


export default new workController()