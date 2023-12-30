import { Role } from "./";

export interface User {
    role: Role;
    firstName: string;
    lastName: string;
    email: string;
    location: string;
}