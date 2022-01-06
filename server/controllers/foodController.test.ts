
import { Connection } from "typeorm";
import { clearDb, connectToDB } from "../db/db";
import { createMockFood } from "../utils/testUtils";
import { createNewFood, deleteFood, getFood } from "./foodController";



describe("Testing foodcontoller", () => {
    /*   console.log(process.env.NODE_ENV) */
    let connection: Connection;
    beforeAll(async () => {
        let con = await connectToDB()
        /*        console.log(con.options.entities) */
        if (con) connection = con;

    });
    beforeEach(async () => {
        //TODO: ClearDB not working
        await clearDb();
        console.log("beforeeach")
    });
    afterAll(async () => {
        await connection.close()
    });

    it('Should create food', async () => {
        const mockfood = createMockFood()
        console.log(mockfood)
        const food = await createNewFood(mockfood)
        expect(food.name).toEqual(mockfood.name)
    })


    it('Should not create food with same name', async () => {
        const mockfood = createMockFood()
        const food = await createNewFood(mockfood)

        expect(createNewFood(mockfood)).rejects
        //expect(food.name).toEqual(mockfood.name)
    })


    it('Should find food', async () => {
        const mockfood = createMockFood()
        const food = await createNewFood(mockfood)
        const found = await getFood(food.id)
        expect(found.id).toEqual(food.id)
        expect(found.name).toEqual(mockfood.name)

        //    expect(1).toEqual(1)

    })

    it('Should delete food', async () => {
        const mockfood = createMockFood()
        const food = await createNewFood(mockfood)
        const dlt = await deleteFood(food.id)
        expect(getFood(food.id)).rejects
    })
})
