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
 
   insert (node){
       if (this.root === null){
           this.root = node;
       }
   } 
} 

BinaryTree = new BinaryTree ();
node1 = new node (12);

BinaryTree.insert(node1);

console.log(BinaryTree.root);
