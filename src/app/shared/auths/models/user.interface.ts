export interface BaseUser {
    full_name: string;
    username: string;
    email: string;
    password: string;
    time_zone: string;
}

export interface User extends BaseUser {
    id: number; 
}