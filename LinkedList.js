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

  remove (target){
      let n = this.head;

      // case 1, the list is empty.
      if (n === null) {
          console.log(false);
      } // end if 

      //verify if the head is the target
      if (n.value === target){
          // case 2 the node to remove is the only node in the linked list.
          if (n === this.tail){
              this.head = null;
              this.tail = null;
              console.log(true);
              
        } else {
              //case 3, we are removing the head node 
              this.head = n.next;
              console.log(true);
        } 
     } // end "if"father

       // looping for run the linked list til found the target

      while(n.next !== null && n.next.value !== target){
            n = n.next;   
      }
       if (n.next !== null){
           
           // case 4, we are removing a tail
           if (n.next === this.tail){
               n.next = null;
               this.tail = n;
               console.log(true);
           } else {
       // case 5, the node to remove is somewhere between tail and head
             n.next = n.next.next;
               console.log(true);
            
           }
         
       }  else {
      // case 6, the item to remove doesnot exist in the linked list
      console.log(false);    
       }
  } // end remove

    // transverse the linked list
   transverse (){
       let n = this.head;
       
       while (n !== null){
           console.log(n.value)
           n = n.next;
       }
       
   } // end transverse
    
    
} //end class 

class node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
} // end class


///////////////////////////////////main/////////////////////////////////////// 


LinkedList = new LinkedList ();
node1 = new node(20);
node2 = new node(150);
node3 = new node(100);
node4 = new node(400);
node5 = new node(700);
node6 = new node(900);

LinkedList.add(node1);
LinkedList.add(node2);
LinkedList.add(node3);
LinkedList.add(node4);
LinkedList.add(node5);
LinkedList.add(node6);

//console.log(LinkedList.head)
//LinkedList.contains(150);

LinkedList.transverse();


