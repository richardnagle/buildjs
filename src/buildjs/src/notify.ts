import {NotificationModel} from './models/notification-model';

export class NotifyCustomElement {
    messages: NotificationModel[];

    constructor() {
        this.messages = [];
    }

    add(message: NotificationModel) {
        this.messages.push(message);
    }
}