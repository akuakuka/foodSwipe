import { Connection, createConnection, getConnection } from "typeorm";
import { Family } from "./models/family";
import { Food } from "./models/food";
import { Invite } from "./models/invite";
import { Uuser } from "./models/user";
//TODO: Database connections based on node_env
const NODE_ENV = process.env.NODE_ENV;
// TODO: entities filuilla?
export const connectToDB = async (): Promise<Connection> => {

    const connection = await createConnection({
        type: "postgres",
        host: "192.168.1.151",
        port: 5432,
        username: "fest3",
        password: "fest3",
        database: "food_swipe5",
        synchronize: false,
        logging: false,
        entities: [
            Family, Uuser, Food, Invite
        ],
        // entities: [
        //     __dirname + "/models/*.ts"
        // ],
    });
    return connection
}

export const clearDb = async (): Promise<void> => {
    if (NODE_ENV !== "test") return

    /*     const entities = getConnection().entityMetadatas;
    
        for (const entity of entities) {
            const repository = getConnection().getRepository(entity.name); 
    
            await repository.query(`DELETE FROM ${entity.name}`)
    
        } */
    await getConnection().dropDatabase()
    await getConnection().synchronize()
};

