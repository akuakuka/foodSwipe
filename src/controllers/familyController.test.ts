
import exp from "constants";
import { Connection } from "typeorm";
import { clearDb, connectToDB } from "../db/db";

import { createNewFamily } from "./familyController";
// import { createMockFamily } from "../utils/testUtils";
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



describe("Testing familycontroller", () => {
    console.log(process.env.NODE_ENV)
    let connection: Connection;
    beforeAll(async () => {
        let con = await connectToDB()
        console.log(con.options.entities)
        if (con) connection = con;
    });
    beforeEach(async () => {
        //TODO: ClearDB not working
        //   await clearDb(connection);
    });
    it('Jest should work', async () => {
        expect(1).toEqual(1)
    })

    // it('SHould create family', async () => {
    //     const mockfamily = createMockFamily()
    //     const family = await createNewFamily(mockfamily)
    //     console.log(family)
    //     expect(family.name).toEqual(mockfamily.name)
    // });

    /*     it('Creating entity should work', async () => {
            const j = new JJ()
            j.j = "kkkak"
            await j.save()
            expect(j.j).toEqual("kkkak")
        })
    
        it('Should create family', async () => {
            const mockfamily = createMockFamily()
            const family = await createNewFamily(mockfamily)
        }) */


})
