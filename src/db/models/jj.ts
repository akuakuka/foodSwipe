import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity } from "typeorm";
import { Family } from "./family";

@Entity()
export class JJ extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    j: string;

}
