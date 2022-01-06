import supertest from "supertest";
import { Connection } from "typeorm";
import { connectToDB } from "../db/db";
import { app } from "../index";
import { createMockFamily, createSavedMockFamily } from "../utils/testUtils";


interface ResponseError extends Error {
    status?: number;
}
describe('testing familyRouter', () => {
    // TCPWRAP OPEN HANDLES FIX
    //@ts-ignore
    let server;
    //@ts-ignore
    let request;
    let connection: Connection;

    beforeAll(async () => {
        let con = await connectToDB()
        if (con) connection = con;
    });

    beforeAll((done) => {
        server = app.listen(done);
        request = supertest(server);
    });

    afterAll((done) => {
        //@ts-ignore
        server.close(done);
    });

    afterAll(async () => {
        await connection.close()
    });

    describe('post /family', () => {

        it('Should 200', async () => {
            //@ts-ignore
            const response = await request.get('/api/v1/family')
            expect(response.status).toEqual(200);
        })

        it('Should find family', async () => {
            const fam = await createSavedMockFamily()
            //@ts-ignore
            const response = await request.get(`/api/v1/family/${fam.id}`)

            expect(response.status).toEqual(200);
            expect(response.headers["content-type"]).toMatch(/json/);
            expect(response.body.id).toEqual(fam.id)
            expect(response.body.name).toEqual(fam.name)

        })
        it('Should post new family', async () => {

            const mock = createMockFamily()
            //@ts-ignore
            const response = await request.post('/api/v1/family', mock)
            expect(response.headers["content-type"]).toMatch(/json/);
            expect(response.status).toEqual(200);
            console.log(response)

        })


    })





})




