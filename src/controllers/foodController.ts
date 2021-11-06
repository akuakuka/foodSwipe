import { DeleteResult } from "typeorm";
import { Family, IFamily } from "../db/models/family";
import { Food, IFood } from "../db/models/food";
import { IUser, User } from "../db/models/user";

export const createNewFood = async (food: IFood): Promise<Food> => {
    const newFood = await Food.create({ ...food })
    return newFood;
}

export const editFood = async (food: IFood): Promise<Food> => {
    let newFood = await Food.findOneOrFail(food.id)
    newFood.picture = food.picture;
    newFood.name = food.name;
    newFood.type = food.type;
    await newFood.save()
    return newFood;
}

export const deleteFood = async (food: IFood): Promise<DeleteResult> => {
    let deletedFood = await Food.delete(food.id)
    return deletedFood;
}
