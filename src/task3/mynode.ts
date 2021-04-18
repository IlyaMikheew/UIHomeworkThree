export class MyNode <T> {
    private _data: T;
    private _next: MyNode<T> | null;

    constructor(data: T, next: MyNode<T> | null) {
        this._data = data;
        this._next = next;
    }

    get data(): T {
        return this._data;
    }

    get next(): MyNode<T> | null {
        return this._next;
    }

    set next(value: MyNode<T> | null) {
        this._next = value;
    }
}
