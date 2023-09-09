import { Streaming } from "./streaming";

export interface StreamingResponse {
    ok:        boolean;
    message:   string;
    streaming?: Streaming;
    streamings?: Streaming[];
}
