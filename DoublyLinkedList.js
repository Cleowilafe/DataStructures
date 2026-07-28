class node {
    constructor (value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
} // end node class


class DoublyLinkedList {
    constructor (){
        this.tail = null;
        this.head = null;
    }

    add (node){
        //
        if (this.head === null){
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    } // end add 

    traverse (){
        let n = this.head;
        while (n !== null){
            console.log(n.value);
            n = n.next;
            } // end while
    } // end traverse

    
} // end doubly linked list class 

/////////////////////////////////main/////////////////////////////////////////

DoublyLinkedList = new DoublyLinkedList ();

node1 = new node(33);
node2 = new node(23);
node3 = new node(543);
node4 = new node(6764);
node5 = new node(3353);

DoublyLinkedList.add(node1);
DoublyLinkedList.add(node2);
DoublyLinkedList.add(node3);
DoublyLinkedList.add(node4);
DoublyLinkedList.add(node5);

DoublyLinkedList.traverse ();
