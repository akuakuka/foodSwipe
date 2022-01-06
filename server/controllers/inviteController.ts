import { Family } from "../db/models/family";
import { IInvite, Invite } from "../db/models/invite";
import { IUser, Uuser } from "../db/models/user";

export const inviteUserToFamily = async (invitee: number, invitor: number, family: number): Promise<Invite> => {

    const newInvite = new Invite();

    const fam = await Family.findOne({ id: family });
    if (!fam) return Promise.reject()

    const inviter = await Uuser.findOne({ id: invitor });
    if (!inviter) return Promise.reject()

    const inviteee = await Uuser.findOne({ id: invitee });
    if (!inviteee) return Promise.reject()
    newInvite.inviter = inviter
    newInvite.invitee = inviteee

    newInvite.family = fam
    newInvite.status = "pending"
    await newInvite.save();
    return newInvite;
}
// TODO: Mitä näiden pitäisi palauttaa?
export const acceptInvite = async (inviteID: number): Promise<Invite> => {
    const invite = await Invite.findOneOrFail(inviteID)
    invite.status = "accepted";
    await invite.save();
    await invite.reload()
    return invite
}

export const declineInvite = async (inviteID: number): Promise<Invite> => {
    const invite = await Invite.findOneOrFail(inviteID)
    invite.status = "declined";
    await invite.save();
    await invite.reload()
    return invite
}

export const getUsersInvites = async (user: IUser): Promise<IInvite[]> => {
    const invites: IInvite[] = await Invite.find({ where: { invitee: user.id }, relations: ['invitee', "inviter"] })
    return invites;
}