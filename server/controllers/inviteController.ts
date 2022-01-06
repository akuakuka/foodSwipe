import { Family, IFamily } from "../db/models/family";
import { IInvite, Invite } from "../db/models/invite";
import { IUser, User } from "../db/models/user";

export const inviteUserToFamily = async (invitee: IUser, invitor: IUser, family: IFamily): Promise<Invite> => {

    const newInvite = new Invite();
    newInvite.invitee = await User.findOneOrFail(invitee.id);
    newInvite.inviter = await User.findOneOrFail(invitor.id);
    newInvite.family = await Family.findOneOrFail(family.id);
    await newInvite.save();
    return newInvite;
}
// TODO: Mitä näiden pitäisi palauttaa?
export const acceptInvite = async (inviteID: number) => {
    const invite = await Invite.findOneOrFail(inviteID)
    invite.status = "accepted";
    await invite.save();
}

export const declineInvite = async (inviteID: number) => {
    const invite = await Invite.findOneOrFail(inviteID)
    invite.status = "declined";
    await invite.save();
}

export const getUsersInvites = async (user: IUser): Promise<IInvite[]> => {
    const invites: IInvite[] = await Invite.find({ where: { invitee: user.id } })
    return invites;
}