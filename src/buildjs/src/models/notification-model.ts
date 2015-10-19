export class NotificationModel {
    private _content: string;
    private _username: string;
    private _timestamp: Date;

    constructor(content: string, username: string) {
        this._timestamp = new Date()
        this._content = content;
        this._username = username;
    }

    get timestamp(): Date {
        return this._timestamp;
    }

    get content(): string {
        return this._content;
    }

    get username(): string {
        return this._username;
    }
}