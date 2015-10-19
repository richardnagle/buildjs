import {NotificationModel} from './models/notification-model';

export class Notify {
    messages: NotificationModel[];

    constructor() {
        this.messages = [];
    }

    add(message: string) {

        let notification = new NotificationModel(message, "Richard Nagle");

        this.messages.push(notification);
    }
}