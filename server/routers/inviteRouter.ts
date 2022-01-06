import { Router, Request, Response } from "express";
import { Family } from "../db/models/family";
import { IInvite } from "../db/models/invite";
import { User } from "../db/models/user";

const inviteRouter = Router();



inviteRouter.post('/', async (req: Request, res: Response): Promise<void> => {
    // req.user inviter

    const invite:IInvite  = req.body;


});

inviteRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {
    // req.user inviter

    const invite: IInvite = req.body;


});
