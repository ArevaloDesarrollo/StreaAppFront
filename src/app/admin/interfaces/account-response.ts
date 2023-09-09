import { ErrorsResponse } from "src/app/shared/interfaces/errors-response";
import { Account } from "./account";

export interface AccountResponse {
    ok:       boolean;
    message:  string;
    errors?:  ErrorsResponse[];
    account?: Account;
    accounts?: Account[];
}
