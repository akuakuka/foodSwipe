
import { Connection } from "typeorm";
import { clearDb, connectToDB } from "../db/db";
import { createMockFamily, createMockUser } from "../utils/testUtils";
import { addUserToFamily, createNewFamily } from "./familyController";
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
        await connection.close()
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
        });

    })

})

it('Should addFoodToFamily', async () => {



})
it('Should removeFoodFromFamily', async () => { })
it('Should removeUserFromFamily', async () => {

    const newFamily = createMockFamily();
    const savedFamily = await createNewFamily(newFamily)
    console.log(savedFamily)
    /*         expect(newFamily.name).toEqual(savedFamily.name) */
    const user = createMockUser();
    console.log(user)
    const savedUser = await createNewUser(user)
    const fam = await addUserToFamily(savedFamily.id, savedUser)
    console.log(fam)

})





