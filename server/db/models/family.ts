import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Food } from "./food";
import { Uuser } from "./user";

@Entity()
/* @Unique(['name']) */
export class Family extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(() => Uuser)
    @JoinTable()
    users: Uuser[];

    @OneToMany(() => Food, food => food.family)
    foods: Food[];


}

export interface IFamily extends Pick<Family, "name" | "users"> {
    id?: number;
}



/* @ManyToMany(() => Category)
@JoinTable()
categories: Category[]; */