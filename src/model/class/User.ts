import { IUser, Role } from "..";

export class User implements IUser{
    role: Role;
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    availableWorks: string[]
    userId: string

    constructor(data?: any){
        this.email =  data?.email || "";
        this.firstName =  data?.firstName || "";
        this.lastName =  data?.lastName || "";
        this.userId =  data?.userId || "";
        this.role =  data?.role || "freelancer";
        this.location = data?.location || "";
        this.availableWorks = data?.availableWorks || [];
    }
}