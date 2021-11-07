import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, BaseEntity } from "typeorm";
import { Food } from "./food";
import { User } from "./user";

@Entity()
export class Family extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @ManyToMany(() => User, user => user.families)
    // users: User[];

    // @OneToMany(() => Food, food => food.family)
    // foods: Food[];

}

export interface IFamily extends Pick<Family, "name"> {
    id?: number;
}
