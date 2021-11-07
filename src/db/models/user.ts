import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity } from "typeorm";
import { Family } from "./family";

@Entity()
export class jj extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @ManyToMany(() => Family, family => family.users)
    families: Family[];

}


export interface IUser extends Pick<jj, "username" | "families"> {
    id?: number;
}