import { Injectable } from '@angular/core';

export interface LoggedInUser {
    id: string;
    contactId: string;
    profileId: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface Parameters {
    loggedInUser: LoggedInUser;
}

@Injectable()
export class EnvService {
    public static params: Parameters;
    loggedInUser: LoggedInUser;

    public static inject(parameters: Parameters) {
        EnvService.params = parameters;
    }

    constructor() {
        this.loggedInUser = EnvService.params.loggedInUser;
    }

}
