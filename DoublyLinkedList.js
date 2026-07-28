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

    reversetraverse (){
        let n = this.tail;
        while (n !== null){
            console.log(n.value);
            n = n.previous;
        } // end while
    } // end reverse traverse

    remove (target){
         // case 1, if the list is empty
         if (this.head === null) {
             return false;
         } // end if

         // case 2 and case 3 
        if (target === this.head.value){
            // if the node to remove is only node in the list
            if (this.head === this.tail){
                this.head = null;
                this.tail = null;
                return true;
                
            } else {
                // if the node to remove is a head
                this.head = this.head.next;
                this.head.previous = null;
                return true;
            }
        } // end if

        // run the list 
        let n = this.head;

        while(n.value !== target){
            n = n.next;
        }

        // case 4, we are removing the tail node
        if (target === this.tail.value){
            this.tail = this.tail.previous;
            this.tail.next = null;
            return true;
        } else if (n !== null){
            //case 5, if the node to remove is between head and tail
            n.previous.next = n.next; // updating the new value of the new next
            n.next.previous = n.previous; // updating the new value of the new prev
            return true;
        }
     return false;    
    } // end remove 
    
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

//console.log("traverse: ");
//DoublyLinkedList.traverse ();
//console.log("Reverse traverse: ");
//DoublyLinkedList.reversetraverse();

console.log("before to remove: ")
DoublyLinkedList.traverse();

console.log("later to remove: ")

DoublyLinkedList.remove(543);

DoublyLinkedList.traverse();


