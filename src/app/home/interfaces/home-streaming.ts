export interface HomeStreaming {
    id:              string;
    name:            string;
    img_url:         string;
    price_account?:   number;
    price_profile?:   number;
    amount_profiles: number;
    accounts_active?: string;
    profiles_active?: string;
}
