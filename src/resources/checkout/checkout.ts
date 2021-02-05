import { sessions } from './sessions';

export class checkout {

    sessions: typeof sessions

    constructor() {
        this.sessions = sessions
    }
}