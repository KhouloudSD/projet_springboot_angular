import { Role } from "./role";

export class admin {
    id!: number;
    firstName!: string;
    lastName!: string;
    username!: string;
    role!: Role;
    token?: string;
}