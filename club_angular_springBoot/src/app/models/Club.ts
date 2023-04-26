import { Role } from "./role";

export interface Club {
    id: number;
    name :string;
    email : string;
    phone : number;
    fbUrl : string;
    password :string;
    role :Role;
    imageUrl : string;
    description :string;

}