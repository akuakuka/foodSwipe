import { Router, Request, Response } from "express";

const familyRouter = Router();



familyRouter.post('/', async (req: Request, res: Response): Promise<void> => {

});



familyRouter.get('/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
});