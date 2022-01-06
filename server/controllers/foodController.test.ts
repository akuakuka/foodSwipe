
import { Connection, getConnection } from "typeorm";
import { clearDb, connectToDB } from "../db/db";
import { Food } from "../db/models/food";
import { createMockFamily, createMockFood } from "../utils/testUtils";
import { createNewFamily } from "./familyController";
import { createNewFood } from "./foodController";



describe("Testing foodcontoller", () => {
    /*   console.log(process.env.NODE_ENV) */
    let connection: Connection;
    beforeAll(async () => {
        let con = await connectToDB()
        /*        console.log(con.options.entities) */
        if (con) connection = con;
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Food)
            .execute();
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
    it('Should create food', async () => {
        const mockfamily = createMockFamily()
        const family = await createNewFamily(mockfamily)

        const mockfood = createMockFood(family)
        const savedfood = await createNewFood(mockfood);
        /*     console.log(savedfood) */
        expect(savedfood.name).toBeTruthy()

    })




})
