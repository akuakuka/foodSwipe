import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Family } from "./family";
import { Uuser } from "./user";

@Entity()
export class Invite extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @OneToOne(() => Uuser)
    @JoinColumn()
    invitee: Uuser;

    @OneToOne(() => Uuser)
    @JoinColumn()
    inviter: Uuser;

    @OneToOne(() => Family)
    @JoinColumn()
    family: Family;
}

/* export type IInvite = Pick<Invite, "id" | "status" | "invitee" | "inviter" | "family">; */


export interface IInvite extends Pick<Invite, "status" | "invitee" | "inviter" | "family"> {
    id?: number;
}