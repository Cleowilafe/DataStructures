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
         current.left = node;
       } else {
         this.insertnode(current.left, node);
       } // end if
     } // end if daddy

     if (node.value > current.value){
       if(current.right === null){
         current.right = node;
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

const Tree = new BinaryTree ();
     
node1 = new node (23);
node2 = new node (14);
node3 = new node (31);

Tree.insert(node1);

Tree.insert(node2);
Tree.insert(node3);

console.log(Tree.root);

//add traverse method 

