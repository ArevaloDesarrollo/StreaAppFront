export interface ErrorsResponse {
    type: string;
    value:string | object[];
    msg: string;
    path: string;
    location: string;
}
