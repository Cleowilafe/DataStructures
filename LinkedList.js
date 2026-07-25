class LinkedList{
   constructor () {
       this.head = null;
       this.tail = null;
   }
} 

class node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}
LinkedList = new LinkedList ();
node1 = new node(20);
node2 = new node(150);
node3 = new node(100);


//later i will add it in class node
function add (n) {
    if (LinkedList.head === null){
    LinkedList.head = n;
    LinkedList.tail = n;
} else {
   LinkedList.tail.next = n;
   LinkedList.tail = n;
}
}


add(node1);
add(node2);
add(node3);

console.log(LinkedList.head)
