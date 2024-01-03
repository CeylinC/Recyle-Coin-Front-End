import { IWork, Role } from "..";

export interface IUser {
    role: Role;
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    password?: string;
    availableWorks: IWork[]
}