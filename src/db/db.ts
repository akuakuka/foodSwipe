import { Connection, createConnection, getConnection } from "typeorm";
import { Family } from "./models/family";
import { Food } from "./models/food";
import { Invite } from "./models/invite";
import { jj } from "./models/user";
//TODO: Database connections based on node_env
const NODE_ENV = process.env.NODE_ENV;
// TODO: entities filuilla?
export const connectToDB = async (): Promise<Connection> => {
    console.log("connectToDB")
    console.log(__dirname + "/models/*.ts")
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "postgres",
        synchronize: true,
        logging: false,
        entities: [
            Family, jj, Food
        ],
        // entities: [
        //     __dirname + "/models/*.ts"
        // ],
    });
    console.log("Connected to TEST DB !")
    await connection.synchronize();
    return connection;
}

export const clearDb = async (connection: Connection): Promise<void> => {
    if (NODE_ENV !== "test") return
    // Fetch all the entities
    const entities = getConnection().entityMetadatas;

    for (const entity of entities) {
        const repository = getConnection().getRepository(entity.name); // Get repository

        await repository.query(`DELETE FROM ${entity.name}`)
        //await repository.clear(); // Clear each entity table's content
    }

};

