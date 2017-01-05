import { HourLog } from './hour-log';

export class ShiftReport {
    id: string;
    startHour: number;
    endHour: number;

    hourComment: string[];
    hourDescribe: string[];

    hourLog: HourLog[];

    setHours(start: number, end: number) {
        this.startHour = start;
        this.endHour = end;

        this.hourLog = this.hourComment
            .filter((value, key) => {
                return start <= key && key < end;
            })
            .map((value, key) => {
                let hourNum = key + start;
                let hour = new HourLog(this.id, hourNum);
                hour = hour.setDescribe(this.hourDescribe[hourNum] ?
                    this.hourDescribe[hourNum] : 'n/a');
                return hour.setComment(value);;
            });
    }
}
