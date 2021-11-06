import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Invite {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    invitee: string;

    @Column()
    inviter: string;

    @Column()
    family: string;
}