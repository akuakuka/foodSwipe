
import { Connection } from "typeorm";
import { clearDb, connectToDB } from "../db/db";
import { createMockUser, createSavedMockUser } from "../utils/testUtils";
import { createNewUser, findUser } from "./userController";


describe("Testing usercontroller", () => {
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

    it('Jest should work', async () => {
        expect(1).toEqual(1)
    })

    it('Should create user', async () => {
        const mockuser = createMockUser()
        const savedUser = await createNewUser(mockuser);
        expect(savedUser.id).toBeTruthy()
        expect(savedUser.username).toEqual(mockuser.username)
    })

    it('Should find user', async () => {
        const usr = await createSavedMockUser()
        const found = await findUser(usr.id)
        expect(found.id).toEqual(usr.id)
        expect(found.username).toEqual(usr.username)
    })
})
