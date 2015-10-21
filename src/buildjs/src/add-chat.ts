import {NotificationModel} from './models/notification-model';
import {EventAggregator, Subscription} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)
export class AddChatCustomElement {
    private _message: string;
    username: string;
    disableAdd: boolean;

    private events: EventAggregator;

    constructor(events: EventAggregator) {
        this.events = events;
        this.message = null;
        this.username = null;
    }    

    add() {

        this.events.publish(new NotificationModel(this.message, this.username));

        this.message = null;
    }

    clear() {
        this.message = null;
        this.username = null;
    }

    get message(): string {
        return this._message;
    }
    set message(value: string) {
        this._message = value;

        this.disableAdd = (value == null || value == "");
    }
}