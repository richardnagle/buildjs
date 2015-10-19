import {NotificationModel} from './models/notification-model';
import {EventAggregator, Subscription} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';
 
@inject(EventAggregator)
export class NotifyCustomElement {
    messages: NotificationModel[];
    private subscription: Subscription;

    constructor(events: EventAggregator) {
        this.messages = [];
        this.subscription = events.subscribe(NotificationModel, message => this.add(message));
    }

    private add(message: NotificationModel) {
        this.messages.push(message);
    }

    detach() {
        this.subscription.dispose();
    }
}