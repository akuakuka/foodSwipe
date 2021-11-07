import { IFamily } from "../db/models/family";
import faker from "faker"
import { IUser } from "../db/models/user";
import { IFood } from "../db/models/food";

/* export const createMockFamily = (): IFamily => {
    return {
        name: faker.name.firstName(),
        foods: [],
        users: []
    }
}

export const createMockUser = (): IUser => {
    return {
        families: [],
        username: faker.internet.userName()
    }
}

export const createMockFood = (): IFood => {
    return {
        name: faker.name.firstName(),
        family: createMockFamily(),
        picture: faker.internet.url()
    }
} */