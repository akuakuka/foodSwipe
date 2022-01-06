import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Uuser } from "./user";

@Entity()
/* @Unique(['name']) */
export class Family extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Uuser)
    @JoinTable()
    users: Uuser[];



}

export interface IFamily extends Pick<Family, "name" | "users"> {
    id?: number;
}


/*     @OneToMany(() => Food, food => food.family)
    foods: Food[]; */

/* @ManyToMany(() => Category)
@JoinTable()
categories: Category[]; */