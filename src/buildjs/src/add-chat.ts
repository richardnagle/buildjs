export class AddChat {
    text: string;
    output: string;

    add() {
        this.output = this.text;
        this.clear()
    }

    clear() {
        this.text = null;
    }
}