import { Request, Response, Router } from "express";
import { createNewFamily, findFamily } from "../controllers/familyController";
import { IFamily } from "../db/models/family";

export const familyRouter = Router();

export interface FamilyResponse extends Response {

}


familyRouter.get('/', async (req: Request, res: Response) => {
    res.json({ ok: "ok" })
});



familyRouter.post('/', async (req: Request, res: Response) => {
    console.log("####################################")
    const fam: IFamily = req.body;
    console.log(fam)
    const saved = await createNewFamily(fam)
    res.json(saved)

});



familyRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const found = await findFamily(+id)
    res.json(found)
});