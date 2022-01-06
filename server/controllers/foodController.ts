import { DeleteResult } from "typeorm";
import { Food, IFood } from "../db/models/food";

export const createNewFood = async (food: IFood): Promise<Food> => {
    const newFood = new Food();
    // { family: food.family, name: food.name, type: food.type, picture: food.picture }
    newFood.name = food.name;
    newFood.picture = food.picture;
    newFood.type = food.type
    console.log(newFood)
    await newFood.save()
    return newFood;
}

export const getFood = async (id: number): Promise<Food> => {
    const found = await Food.findOne({ id: id });
    if (!found) return Promise.reject()
    return found;
}

export const editFood = async (food: IFood): Promise<Food> => {
    let newFood = await Food.findOneOrFail(food.id)
    newFood.picture = food.picture;
    newFood.name = food.name;
    newFood.type = food.type;
    await newFood.save()
    return newFood;
}

export const deleteFood = async (id: number): Promise<DeleteResult> => {
    if (!id) Promise.reject();
    //@ts-ignore
    let deletedFood = await Food.delete(id)
    return deletedFood;
}
