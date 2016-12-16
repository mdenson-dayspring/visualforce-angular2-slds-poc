import { HourLog } from './hour-log';

export class ShiftReport {
    endHour: number;
    startHour: number;

    hourLog: HourLog[] = [
        { hour: 8, mood: 'Good', comment: 'Sleeping' },
        { hour: 9, mood: 'Good', comment: 'Woke up in a good mood' },
        {
            hour: 10, mood: 'Good', comment: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Praesent fermentum turpis neque, ut mollis odio porta at. 
    Maecenas justo ipsum, facilisis vitae vehicula in, 
    accumsan id sapien. Donec lacinia augue leo, a luctus 
    lorem ullamcorper eu. Proin quis sollicitudin nulla. 
    Nulla dictum ligula ac sed.`},
        { hour: 11, mood: 'n/a', comment: '' },
        { hour: 12, mood: 'n/a', comment: '' },
        { hour: 13, mood: 'n/a', comment: '' },
        { hour: 14, mood: 'n/a', comment: '' },
        { hour: 15, mood: 'n/a', comment: '' }
    ];
}
