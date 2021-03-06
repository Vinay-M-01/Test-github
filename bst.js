class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree 
{
    constructor() 
	{
        this.root = null;
    }

    insert(value) 
	{
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (value > currentNode.value) {
                        if (!currentNode.right) {
                            currentNode.right = newNode;
                            return this;
                        }
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
	search(value) 
	{
        let currentNode = this.root;

        while (currentNode) 
		{
            if (currentNode.value == value)
                console.log(`The searched value is ${currentNode.value}\n`);
                

            if (value < currentNode.value) 
			{
                currentNode = currentNode.left;
            } else 
			{
                currentNode = currentNode.right;
            }
			

        }
		

    }
}

const tree = new BinaryTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(10)
tree.insert(15)
tree.insert(1)
tree.search(6)

console.log(tree);
