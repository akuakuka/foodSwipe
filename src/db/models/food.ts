import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Food {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    family: Family;

}