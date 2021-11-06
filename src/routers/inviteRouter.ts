import { Router, Request, Response } from "express";
import { Family } from "../db/models/family";
import { User } from "../db/models/user";

const inviteRouter = Router();

interface familyInvite {
    inviter: User;
    invitee: User;
    family: Family;
    status: string;
}

inviteRouter.post('/', async (req: Request, res: Response): Promise<void> => {
    // req.user inviter

    const invite: familyInvite = req.body;


});

inviteRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {
    // req.user inviter

    const invite: familyInvite = req.body;


});
