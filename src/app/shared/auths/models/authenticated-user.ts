export interface AuthenticatedUser {
    accessToken: string;
    tokenType: string;
    user: any;
}