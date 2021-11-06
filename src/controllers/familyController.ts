import { Family, IFamily } from "../db/models/family";
import { Food, IFood } from "../db/models/food";
import { IUser, User } from "../db/models/user";

export const createNewFamily = async (family: IFamily): Promise<Family> => {
    const newFamily = await Family.create({ ...family })
    return newFamily;
}

export const addUserToFamily = async (fam: IFamily, user: IUser): Promise<Family> => {
    const family = await Family.findOneOrFail(fam.id);
    const usr = await User.findOneOrFail(user.id);

    family.users.push(usr)
    await family.save()
    return family;
}

export const addFoodToFamily = async (fam: IFamily, food: IFood): Promise<Family> => {
    const family = await Family.findOneOrFail(fam.id);
    const fd = await Food.findOneOrFail(food.id);

    family.foods.push(fd)
    await family.save()
    return family;
}

export const removeFoodFromFamily = async (fam: IFamily, food: IFood): Promise<Family> => {
    const family = await Family.findOneOrFail(fam.id);
    const fd = await Food.findOneOrFail(food.id);

    family.foods = family.foods.filter(f => f.id !== fd.id)
    await family.save()
    return family;
}

export const removeUserFromFamily = async (fam: IFamily, user: IUser): Promise<Family> => {
    const family = await Family.findOneOrFail(fam.id);
    const usr = await User.findOneOrFail(user.id);

    family.users = family.users.filter(f => f.id !== usr.id)
    await family.save()
    return family;
}