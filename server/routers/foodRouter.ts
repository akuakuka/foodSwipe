import { Router, Request, Response } from "express";
import { IFamily } from "../db/models/family";

const familyRouter = Router();

familyRouter.post('/', async (req: Request, res: Response): Promise<void> => {
const family:IFamily = req.body;
});

familyRouter.get('/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
});

familyRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {

});