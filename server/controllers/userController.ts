import { IUser, Uuser } from "../db/models/user";

export const createNewUser = async (user: IUser): Promise<Uuser> => {
    let newUser = new Uuser();
    newUser.families = []
    newUser.username = user.username
    const savedUser = await newUser.save()
    return savedUser;
}