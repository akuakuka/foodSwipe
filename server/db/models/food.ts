import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    /*     @ManyToOne(() => Family, family => family.foods)
        family: Family;
    } */
}
export interface IFood extends Pick<Food, | "name" | "type" | "picture"> {
    id?: number;
}


