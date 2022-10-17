export interface BaseSchedule {
    reminder_date_time: string
}

export interface Schedule extends BaseSchedule {
    id: number
}
