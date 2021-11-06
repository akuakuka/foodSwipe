import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Family } from "./family";
import { User } from "./user";

@Entity()
export class Invite extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @OneToOne(() => User)
    @JoinColumn()
    invitee: User;

    @OneToOne(() => User)
    @JoinColumn()
    inviter: User;

    @OneToOne(() => Family)
    @JoinColumn()
    family: Family;
}

export type IInvite = Pick<Invite, "id" | "status" | "invitee" | "inviter" | "family">;
