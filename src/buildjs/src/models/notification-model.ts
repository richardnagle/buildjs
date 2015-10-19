export class NotificationModel {
    private _content: string;
    private _username: string;
    private _timestamp: Date;

    constructor(content: string, username: string) {
        this._timestamp = new Date()
        this._content = content;
        this._username = username;
    }

    get timestamp(): string {
        return this._timestamp.toLocaleString("en-GB");
    }

    get content(): string {
        return this._content;
    }

    get username(): string {
        return this._username;
    }
}