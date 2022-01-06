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

export const editFood = async (food: IFood): Promise<Food> => {
    let newFood = await Food.findOneOrFail(food.id)
    newFood.picture = food.picture;
    newFood.name = food.name;
    newFood.type = food.type;
    await newFood.save()
    return newFood;
}

export const deleteFood = async (food: IFood): Promise<DeleteResult> => {
    if (!food.id) Promise.reject();
    //@ts-ignore
    let deletedFood = await Food.delete(food.id)
    return deletedFood;
}
