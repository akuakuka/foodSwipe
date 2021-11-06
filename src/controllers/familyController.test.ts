
import { Connection } from "typeorm";
import { clearDb, connectToDB } from "../db/db";
import { createMockFamily } from "../utils/testUtils";
import { createNewFamily } from "./familyController";

// 
//export const createNewFamily = async (family: IFamily): Promise<Family> => {
//should create family;
//should not create family duplicate
//

//export const addUserToFamily = async (fam: IFamily, user: IUser): Promise<Family> => {
//should add user to family


//export const addFoodToFamily =   async (fam: IFamily, food: IFood): Promise<Family> => {
//should add food to family



//export const removeFoodFromFamily = async (fam: IFamily, food: IFood): Promise<Family> => {
//should remove food from family


//export const removeUserFromFamily = async (fam: IFamily, user: IUser): Promise<Family> => {
//should remove food from family



describe("Testing Artistcontroller", () => {
    let connection: Connection;
    beforeAll(async () => {
        let con = await connectToDB()
        if (con) connection = con;
    });
    beforeEach(async () => {
        await clearDb(connection);
    });

    it('SHould create family', async () => {
        const mockfamily = createMockFamily()
        const family = await createNewFamily(mockfamily)
        console.log(family)
    });

})
