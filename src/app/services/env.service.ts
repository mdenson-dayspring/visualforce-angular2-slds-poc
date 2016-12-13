import { Injectable } from '@angular/core';

export interface Parameters {
    loggedInUser: string;
}

@Injectable()
export class EnvService {
    public static params: Parameters;
    loggedInUser: string;

    public static inject(parameters: Parameters) {
        EnvService.params = parameters;
    }

    constructor() {
        this.loggedInUser = EnvService.params.loggedInUser;
    }

}
