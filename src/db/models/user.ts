import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity } from "typeorm";
import { Family } from "./family";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @ManyToMany(() => Family, family => family.users)
    families: Family[];

}


export interface IUser extends Pick<User, "username" | "families"> {
    id?: number;
}