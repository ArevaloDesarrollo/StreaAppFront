import { HomeStreaming } from "./home-streaming";

export interface HomeStreamingResponse {
    ok: boolean;
    message: string;
    streamings: HomeStreaming[];
}
