class node {
   constructor (value){
       this.value = value;
       this.left = null;
       this.right = null;
   }


} // end node
 class BinaryTree{
     constructor (){
         this.root = null;

     }
   insertnode(current, node){
     if (node.value < current.value){
       if(current.left === null){
         current.left = current
       } else {
         this.insertnode(current.left, node);
       } // end if
     } // end if daddy

     if (node.value > current.value){
       if(current.right === null){
         current.right = current
       } else {
         this.insertnode(current.right, node);
       } // end if
     } // end if daddy

   }

   insert (node){
       if (this.root === null){
           this.root = node;
       } else {
         this.insertnode(this.root, node);
       } // end if
   } // end insert
}

BinaryTree = new BinaryTree ();
node1 = new node (23);
node2 = new node (14);
node3 = new node (31);

BinaryTree.insert(node1);
BinaryTree.insert(node2);
BinaryTree.insert(node3);

//add traverse method 
