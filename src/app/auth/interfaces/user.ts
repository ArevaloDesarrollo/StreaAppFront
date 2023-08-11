import { Person } from "./person";
import { Role } from "./role";

export interface User {
    id:        string;
    email:     string;
    password:  string;
    balance:   number;
    username:  string;
    id_role:   string;
    state:     boolean;
    createdAt: Date;
    updatedAt: Date;
    person:    Person;
    role:      Role;
}