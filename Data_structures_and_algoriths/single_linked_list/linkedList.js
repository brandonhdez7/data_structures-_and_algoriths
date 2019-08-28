//bad way to insert
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
let first = new Node('Hi');
first.next = new Node('how')
first.next.next = new Node('are')
first.next.next.next = new Node('you')
first.next.next.next.next = new Node('doing')


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
    }
}

let list = new SinglyLinkedList()
list.push('hello');
list.push('goodbye')