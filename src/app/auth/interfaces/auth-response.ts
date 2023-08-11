import { User } from "./user";

export interface AuthResponse {
    ok:      boolean;
    message: string;
    token?:   string;
    user?:    User;
}
