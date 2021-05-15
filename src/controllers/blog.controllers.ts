import { Request, Response } from "express";
import { Blog } from "../entity/blog_param_no1";

class aboutController {
    public async display(req: Request, res: Response) {
        let blog = await Blog.find();
        res.render('blog/blog', { blog })
    }
}


export default new aboutController()