import { BodyProfile } from "./body-profile";

export interface BodyAccount {

    email: string;
    password: string;
    price: number;
    idStreaming: string;
    idRole: string,
    priceProfile: number;
    amountProfiles: number;
    profiles?: BodyProfile[];

}
