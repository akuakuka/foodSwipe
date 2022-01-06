import faker from "faker";
import { Family, IFamily } from "../db/models/family";
import { IFood } from "../db/models/food";
import { IUser } from "../db/models/user";

/* 


export const createMockFood = (): IFood => {
    return {
        name: faker.name.firstName(),
        family: createMockFamily(),
        picture: faker.internet.url()
    }
} */

export const createMockUser = (): IUser => {
    return {
        families: [],
        username: faker.internet.userName()
    }
}


export const createMockFamily = (): IFamily => {
    return {
        name: faker.name.firstName(),

        users: []
    }
}

export const createMockFood = (family: Family): IFood => {
    return {
        picture: faker.internet.url(),
        type: "home",
        name: faker.animal.fish(),


    }
}