import {NotificationModel} from './models/notification-model';

export class AddChatCustomElement {
    message: string;
    username: string;

    add() {

        // send message

        this.message = null;
    }

    clear() {
        this.message = null;
        this.username = null;
    }
}