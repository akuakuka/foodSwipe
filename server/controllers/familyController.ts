import { Family, IFamily } from "../db/models/family";
import { Food, IFood } from "../db/models/food";
import { IUser, Uuser } from "../db/models/user";

export const findFamily = async (id: number): Promise<Family> => {

    const family = await Family.findOne({ id: id }, { relations: ["users"] });
    if (!family) return Promise.reject()
    return family;
}



export const createNewFamily = async (family: IFamily): Promise<Family> => {
    try {
        const newFamily = await Family.create({ ...family })
        await newFamily.save()
        return newFamily;
    } catch (e) {
        throw (e)
    }
}

export const addUserToFamily = async (fam: number, user: Uuser): Promise<Family> => {

    const family = await Family.findOne({ id: fam }, { relations: ["users"] });
    if (!family) return Promise.reject()

    /*  const usr = await Uuser.findOneOrFail(user.id); */

    family.users.push(user)

    await family.save()
    await family.reload()

    return family;
}
export const removeUserFromFamily = async (fam: number, user: IUser): Promise<Family> => {
    const family = await Family.findOne({ id: fam }, { relations: ["users"] });
    if (!family) return Promise.reject()

    const usr = await Uuser.findOne({ id: user.id });
    if (!usr) return Promise.reject()


    family.users = family.users.filter(f => f.id !== usr.id)
    await family.save()
    return family;
}

export const addFoodToFamily = async (fam: IFamily, food: IFood): Promise<Family> => {
    const family = await Family.findOneOrFail(fam.id);
    const fd = await Food.findOneOrFail(food.id);
    /*     family.foods.push(fd) */
    await family.save()
    return family;
}

export const removeFoodFromFamily = async (fam: IFamily, food: IFood): Promise<Family> => {
    const family = await Family.findOneOrFail(fam.id);
    const fd = await Food.findOneOrFail(food.id);

    /*     family.foods = family.foods.filter(f => f.id !== fd.id) */
    await family.save()
    return family;
}

