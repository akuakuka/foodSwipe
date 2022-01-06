


import { Connection } from "typeorm";
import { clearDb, connectToDB } from "../db/db";
import { createSavedMockFamily, createSavedMockInvite, createSavedMockUser } from "../utils/testUtils";
import { acceptInvite, declineInvite, getUsersInvites, inviteUserToFamily } from "./inviteController";


describe("Testing inviteCOntroller", () => {
    let connection: Connection;

    beforeAll(async () => {
        let con = await connectToDB()
        console.log(con.options.entities)
        if (con) connection = con;
    });

    beforeEach(async () => {
        //TODO: ClearDB not working
        await clearDb();
    });

    afterAll(async () => {
        await connection.close()
    });


    it('Should invite user to family', async () => {
        const invitee = await createSavedMockUser()
        const invitor = await createSavedMockUser()
        const fam = await createSavedMockFamily()

        const invite = await inviteUserToFamily(invitee.id, invitor.id, fam.id)
        expect(invite.id).toBeTruthy()
        expect(invite.invitee.username).toEqual(invitee.username)
        expect(invite.inviter.username).toEqual(invitor.username)
        expect(invite.status).toEqual("pending")
        console.log(invite)
    })

    it('Should accept invite', async () => {

        const inv = await createSavedMockInvite()
        const accepted = await acceptInvite(inv.id)
        expect(accepted.status).toEqual("accepted")

    })
    it('Should decline invite', async () => {
        const inv = await createSavedMockInvite()
        const accepted = await declineInvite(inv.id)
        expect(accepted.status).toEqual("declined")
    })
    it('Should get user invites', async () => {
        const usr = await createSavedMockUser()
        const usr2 = await createSavedMockUser()
        // console.log(usr2)
        const fam = await createSavedMockFamily()
        await inviteUserToFamily(usr.id, usr2.id, fam.id)
        const invites = await getUsersInvites(usr)
        const invites2 = await getUsersInvites(usr2)
        /*         expect(invites[0].inviter).toEqual(usr2) */
        console.log(invites)
        expect(invites).toHaveLength(1)
        expect(invites2).toHaveLength(0)
    })
})
