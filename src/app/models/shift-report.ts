import { HourLog } from './hour-log';

export class ShiftReport {
    id: string;
    startHour: number;
    endHour: number;

    hourComment: string[];
    hourPicklist: string[];

    hourLog: HourLog[];

    setHours(start: number, end: number) {
        this.startHour = start;
        this.endHour = end;

        this.hourLog = this.hourComment
            .filter((value, key) => {
                return start <= key && key < end;
            })
            .map((value, key) => {
                let hour = key + start;
                return {
                    hour: hour,
                    mood: this.hourPicklist[hour] ? this.hourPicklist[hour] : 'n/a',
                    comment: value
                };
            });
    }
}
