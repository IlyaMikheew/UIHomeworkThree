import { MyNode } from "./mynode.js";

export class MyList <T> {
    size: number = 0;
    head: MyNode<T> | null;
    tail: MyNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data: T): boolean {
        const newNode: MyNode<T> = new MyNode(data, null);
        if (this.head === null) {
            // console.log(this.head);
            this.head = newNode;
            this.tail = newNode;
            this.size ++;
            return true;
        }
        if (this.size === 1) {
            this.tail = newNode;
            this.head.next = this.tail;
            this.size++;
            return true;
        }
        if (this.tail != null) {
            this.tail.next = newNode;
            this.tail = this.tail.next;
            this.size++;
            return true;
        }
        return false;
    }

    insert(data: T, pos: number): boolean {
        const newNode: MyNode<T> = new MyNode(data, null);
        let current: MyNode<T> | null = this.head;
        if (pos >= this.size || pos < 0) {
            return false;
        }
        if (pos === this.size - 1) {
            if (this.tail != null) {
                this.tail.next = newNode;
                this.tail = this.tail.next;
                this.size++;
                return true;
            }
            // this.tail = newNode;
            // this.size++;
            // return true;
        }
        while (current != null) {
            if (pos === 0) {
                const temp: MyNode<T> | null = current.next;
                current.next = newNode;
                newNode.next = temp;
                this.size++;
                return true;
            }
            current = current.next;
            pos--;
        }
        return false;
    }

    delete (pos: number): boolean {
        if (pos > this.size - 1 || pos < 0) {
            return false;
        }
        if (this.head != null) {
            let previous: MyNode<T> | null = this.head;
            let current: MyNode<T> | null = previous.next;
            if (pos === 0) {
                if (this.size === 1) {
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return true;
                }
                this.head = this.head.next;
                this.size--;
                return true;
            }
            if (pos === this.size - 1) {
                while (current) {
                    current = this.head;
                    if (current.next === this.tail) {
                        this.tail = current;
                        this.tail.next = null;
                        this.size--;
                        return true;
                    }
                    current = current.next;
                }
            }
            while (current != null && previous != null) {
                pos --;
                if (pos === 0) {
                    previous.next = current.next;
                    this.size--;
                    return true;
                }
                previous = current;
                current = current.next;
            }
        }
        return false;
    }

    show(): void {
        let res: string = "[ ";
        let current: MyNode<T> | null = this.head;
        while (current != null) {
            if (current.next === null) {
                res += current.data;
                break;
            }
            res += current.data + ", ";
            // console.log(current.next);
            current = current.next;
        }
        console.log(res + " ]");
    }

    showWithIndex(index: number): void {
        if (index > this.size || index < 0) {
            return;
        }
        let current: MyNode<T> | null = this.head;
        let pos: number = 0;
        while (current != null) {
            if (pos === index) {
                console.log(current.data);
                return;
            }
            pos++;
            current = current.next;
        }
    }
}
