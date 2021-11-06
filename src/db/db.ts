import { Connection, createConnection } from "typeorm";
import { Family } from "./models/family";
import { Food } from "./models/food";
import { Invite } from "./models/invite";
import { User } from "./models/user";

//TODO: Database connections based on node_env
const NODE_ENV = process.env.NODE_ENV;

export const connectToDB = async (): Promise<Connection> => {


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
            User, Family, Invite, Food
        ],
    });
    console.log("Connected to TEST DB !")
    await connection.synchronize();
    return connection;
}

export const clearDb = async (connection: Connection) => {
    if (NODE_ENV !== "test") return
    const entities = connection.entityMetadatas;
    for (const entity of entities) {
        const repository = await connection.getRepository(entity.name);
        await repository.query(`DELETE FROM ${entity.tableName};`);
    }
};