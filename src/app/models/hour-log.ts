export class HourLog {
    private _describe: string;
    private _comment: string;

    constructor(
        readonly shiftReportId: string,
        readonly hour: number) { }

    get describe(): string {
        return this._describe;
    }
    get comment(): string {
        return this._comment;
    }

    setDescribe(val: string): HourLog {
        let cpy = this.clone();
        cpy._describe = val;
        return cpy;
    }
    setComment(val: string): HourLog {
        let cpy = this.clone();
        cpy._comment = val;
        return cpy;
    }

    private clone(): HourLog {
        let cln = new HourLog(this.shiftReportId, this.hour);
        cln._describe = this._describe;
        cln._comment = this._comment;
        return cln;
    }
}
