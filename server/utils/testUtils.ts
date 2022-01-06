import faker from "faker";
import { Family, IFamily } from "../db/models/family";
import { IFood } from "../db/models/food";
import { Invite } from "../db/models/invite";
import { IUser, Uuser } from "../db/models/user";

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

export const createMockFood = (): IFood => {
    return {
        picture: faker.internet.url(),
        type: Math.random() >= 0.5 ? "restaurant" : "home",
        name: faker.internet.password(),


    }
}


export const createSavedMockFamily = async (): Promise<Family> => {
    const mock = createMockFamily()
    const fam = await Family.create({ ...mock })
    await fam.save()
    return fam
}

export const createSavedMockUser = async (): Promise<Uuser> => {
    const mock = createMockUser()
    const usr = await Uuser.create({ ...mock })
    await usr.save()
    return usr
}

export const createSavedMockInvite = async (): Promise<Invite> => {
    const invitee = await createSavedMockUser()
    const invitor = await createSavedMockUser()
    const fam = await createSavedMockFamily()

    const invite = new Invite();
    invite.inviter = invitor
    invite.invitee = invitee

    invite.family = fam
    invite.status = "pending"
    await invite.save();
    return invite
}


