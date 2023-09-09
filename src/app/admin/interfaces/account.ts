import { Profile } from "./profile";
import { Streaming } from "./streaming";

export interface Account {
    id?:           string;
    email?:        string;
    password?:     string;
    price?:        number;
    id_streaming?: string;
    createdAt?:    Date;
    updatedAt?:    Date;
    streaming?:    Streaming;
    price_profile?: number;
    profiles?: Profile[]
}
