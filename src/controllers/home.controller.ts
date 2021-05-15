import { imgProject_index } from "../entity/indexProject";
import { Request, Response } from "express";

class indexControllers {
    public async display (req : Request, res : Response) {
        let project = await imgProject_index.find();
        res.render('home', {project});
    }

}

export default new indexControllers(); 

