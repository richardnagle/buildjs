import {NotificationModel} from './models/notification-model';
import {EventAggregator, Subscription} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)
export class AddChatCustomElement {
    message: string;
    username: string;

    private events: EventAggregator;

    constructor(events: EventAggregator) {
        this.events = events;
    }    

    add() {

        this.events.publish(new NotificationModel(this.message, this.username));

        this.message = null;
    }

    clear() {
        this.message = null;
        this.username = null;
    }
}