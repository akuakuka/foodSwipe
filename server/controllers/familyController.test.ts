
import { Connection } from "typeorm";
import { clearDb, connectToDB } from "../db/db";
import { createMockFamily, createMockFood, createMockUser, createSavedMockFamily } from "../utils/testUtils";
import { addFoodToFamily, addUserToFamily, createNewFamily, removeUserFromFamily } from "./familyController";
import { createNewUser } from "./userController";



describe("Testing familycontroller", () => {

    let connection: Connection;
    beforeAll(async () => {
        let con = await connectToDB()
        if (con) connection = con;
    });

    beforeEach(async () => {
        //TODO: ClearDB not working
        await clearDb();
        /*         await clearDb(connection); */
    });
    afterAll(async () => {
        /*   await connection.close() */
    });


    it('Jest should work', async () => {
        expect(1).toEqual(1)
    })
    describe("Testing creating family", () => {
        it('Should create family', async () => {
            const mockfamily = createMockFamily()
            const family = await createNewFamily(mockfamily)
            await family.save()
            expect(family.name).toEqual(mockfamily.name)
        });

        it('Should not create family with same name', async () => {


            // expect(async () => {
            //     const mockfamily = createMockFamily()
            //     const family = await createNewFamily(mockfamily)
            //     await family.save()
            //     const family2 = await createNewFamily(mockfamily)
            //     await family2.save()

            // }).toThrow();


        });



    })

    describe("Testing adding users", () => {
        it('Should add user to family', async () => {
            const mockuser = createMockUser()
            const user = await createNewUser(mockuser)
            const fam = await createSavedMockFamily()
            console.log(fam)
            const famwithuser = await addUserToFamily(fam.id, user)
            expect(famwithuser.users.length).toBeTruthy()
            expect(famwithuser.users).toContain(user)
            console.log(famwithuser.users)
        });
        it('Should add multiple to family', async () => {
            const mockuser = createMockUser()
            const mockuser2 = createMockUser()
            const user = await createNewUser(mockuser)
            const user2 = await createNewUser(mockuser2)
            const fam = await createSavedMockFamily()
            console.log(fam)
            const famwithuser = await addUserToFamily(fam.id, user)
            const famwithuser2 = await addUserToFamily(fam.id, user2)
            expect(famwithuser2.users.length).toBe(2)
            expect(famwithuser.users).toContain(user)
            expect(famwithuser2.users).toContain(user2)

        });

        it('Should remove users from family', async () => {
            const mockuser = createMockUser()
            const mockuser2 = createMockUser()
            const user = await createNewUser(mockuser)
            const user2 = await createNewUser(mockuser2)
            console.log(user2)
            const fam = await createSavedMockFamily()

            const famwithuser = await addUserToFamily(fam.id, user)
            const famwithuser2 = await addUserToFamily(fam.id, user2)
            const famwitremoved = await removeUserFromFamily(fam.id, user)
            console.log(famwitremoved)
            expect(famwitremoved.users.length).toBe(1)
            // TODO : more tests
            //   expect(famwithuser.users.filter(u => u.username === user2.username)).toEqual(user2.username)

        });

    })
})









