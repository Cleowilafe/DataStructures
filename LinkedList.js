class LinkedList{
   constructor () {
       this.head = null;
       this.tail = null; }


   // add some node in the Linked List 
   add (n) {
    if (this.head === null){
        this.head = n;
        this.tail = n;
    } else {
        this.tail.next = n;
        this.tail = n; }
 }    
  // verify if the value contains in the Linked List 
    
    contains (target) {
    let n = this.head;
        
    while (n !== null && target !== n.value){
        n = n.next;
    } if (n === null){
        console.log(false);
    } else {
        console.log(true); }
}

} //end class 

class node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
} // end class


LinkedList = new LinkedList ();
node1 = new node(20);
node2 = new node(150);
node3 = new node(100);


LinkedList.add(node1);
LinkedList.add(node2);
LinkedList.add(node3);

console.log(LinkedList.head)

LinkedList.contains(150);







