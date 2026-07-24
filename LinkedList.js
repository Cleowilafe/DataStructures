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
function add (node) {
    if (LinkedList.head === null){
    LinkedList.head = node.value;
    LinkedList.tail = node.value;
} else {
   LinkedList.tail = node1;
   node.next = node.value;
}
}


list = [node1, node2, node3];

add(node1);
add(node2);
add(node3);

//print the Linked List
for(var i = 0; i < list.length; i++){
    if (i===0){
    console.log(LinkedList.head)
    } else{
    console.log(list[i].next)
    }
}

