import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Family } from "./family";

@Entity()
export class Uuser extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @ManyToMany(() => Family, family => family.users)
    families: Family[];

}


export interface IUser extends Pick<Uuser, "username" | "families"> {
    id?: number;
}