import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, BaseEntity, JoinTable } from "typeorm";
import { Food } from "./food";
import { jj } from "./user";

@Entity()
export class Family extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => jj)
    @JoinTable()
    users: jj[];

    @OneToMany(() => Food, food => food.family)
    foods: Food[];

}

export interface IFamily extends Pick<Family, "name"> {
    id?: number;
}



/* @ManyToMany(() => Category)
@JoinTable()
categories: Category[]; */