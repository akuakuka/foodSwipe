import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Family } from "./family";

@Entity()
export class Food extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    picture: string;

    @ManyToOne(() => Family, family => family.foods)
    family: Family;
}

export type IFood = Pick<Food, "id" | "name" | "type" | "family" | "picture" | "family">;
