

import { Connection } from "typeorm";
import { clearDb, connectToDB } from "../db";
import { Family } from "./family";



describe("Testing family model", () => {
    console.log(process.env.NODE_ENV)
    let connection: Connection;
    beforeAll(async () => {
        let con = await connectToDB()
        console.log(con.options.entities)
        if (con) connection = con;
    });

    beforeEach(async () => {
        //TODO: ClearDB not working
        await clearDb(connection);
    });

    it('Saving family should work', async () => {
        const newFamily = new Family();
        newFamily.foods = [];
        newFamily.users = [];
        newFamily.name = "famly1";
        await newFamily.save();
        await newFamily.reload();
        console.log(newFamily.id);

        expect(newFamily.name).toEqual("famly1");

    })

    it('Finding family should work', async () => {
        expect(1).toEqual(1)
    })

    it('Deleting family should work', async () => {
        expect(1).toEqual(1)
    })


})
