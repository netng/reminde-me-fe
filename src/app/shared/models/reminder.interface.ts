import { Title } from "@angular/platform-browser";

export interface BaseReminder {
    title: string;
    description: string;
}

export interface Reminder extends BaseReminder {
    id: number;
}