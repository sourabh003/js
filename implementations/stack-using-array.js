class Stack {
    items;
    constructor() {
        this.items = []
    }

    push(...item) {
        this.items.unshift(...item)
    }

    pop() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peak() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null;
    }
    print(){
        console.log(this.items)
    }
}

const stack = new Stack()

stack.push(1,2,3)
stack.push(4,5)
stack.pop()

stack.print()